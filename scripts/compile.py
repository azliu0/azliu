"""Compile logs for production."""

import os
import re
import time
from pathlib import Path

from utils import CYAN, GRAY, GREEN, RED, print_color

IGNORE_STRING = "<!-- compile-ignore -->"

INPUT_DIR = "logs"
OUTPUT_DIR = "static/md"

CORRECT_FORMAT_STRING = "--- \n\
title: 'title' \n\
subtitle: 'subtitle' \n\
date: 'yyyy-mm-dd' \n\
time: '30m' \n\
toc: 'true/false' \n\
published: 'true/false' \n\
--- \
"

CORRECT_IMAGE_STRING = (
    "<Image src='/static/assets/<date>/<image>' alt='<caption>' width={<width>} />"
)
POTENTIAL_IMAGE_PATTERN = r"<Image[^>]+>"
IMAGE_PATTERN = r'<Image src="([^"]+)"(?: alt="([^"]*)")? width={(\d+)} />'


def setup_script():
    """Build setup script."""
    print_color("scripts/compile.py ", CYAN, new_line=False)
    print_color("building logs for production...", GREEN)


def verify_content(markdown_content, filename):
    """Verify that the given markdown content is formatted correctly."""
    separator = "---"
    correct_format = True

    counts = markdown_content.count(separator)
    if counts < 2:
        correct_format = False

    lines = markdown_content.split("\n")
    if len(lines) < 7:
        correct_format = False
    else:
        if (
            lines[0].find(separator) == -1
            or lines[1].find("title") == -1
            or lines[2].find("subtitle") == -1
            or lines[3].find("date") == -1
            or lines[4].find("time") == -1
            or lines[5].find("toc") == -1
            or lines[6].find("published") == -1
            or lines[7].find(separator) == -1
        ):
            correct_format = False

    if not correct_format:
        print_color(
            f"✗ log {filename} formatted incorrectly. "
            f"expected format:\n{CORRECT_FORMAT_STRING}",
            RED,
        )
        raise ValueError(f"log {filename} formatted incorrectly.")

    matches = re.findall(POTENTIAL_IMAGE_PATTERN, markdown_content)
    for match in matches:
        valid_match = re.search(IMAGE_PATTERN, match)
        if not valid_match:
            print_color(
                f"✗ image {match} in log {filename} is formatted incorrectly. "
                f"expected format:\n{CORRECT_IMAGE_STRING}",
                RED,
            )
            raise ValueError(
                f"image {match} in log {filename} is formatted incorrectly."
            )
        # src, _, _ = valid_match.groups()
        # if src[-3:] != "jpg":
        #     print_color(
        #         f"✗ image {match} in log {filename} is a large image format. "
        #         f"use jpg instead.",
        #         RED,
        #     )
        #     raise ValueError(
        #         f"image {match} in log {filename} is a large image format. "
        #         f"use jpg instead."
        #     )


def sanitize_latex(text):
    """Sanitize latex in headers, otherwise generated links break."""
    return text.replace("\\", "").replace("{", "").replace("}", "").replace("_", "-")


def generate_toc_and_insert_anchors(content):
    """Generate table of contents and insert anchor tags."""
    toc = []
    modified_lines = []
    lines = content.split("\n")

    for i, line in enumerate(lines):
        if line.startswith("#") and not line.find(IGNORE_STRING) > -1:
            level = line.count("#")
            title = line.strip("# ").strip()
            anchor = title.lower().replace(" ", "-").replace(".", "")
            anchor = sanitize_latex(anchor)
            toc.append(f'{"  " * (level - 1)}- [{title}](#{anchor})')

            if i > 1 and not lines[i - 2].startswith(f'<a id="{anchor}"></a>'):
                modified_lines.append(f'<a id="{anchor}"></a>')
                modified_lines.append("")
            modified_lines.append(line)
        else:
            if line.find(IGNORE_STRING) > -1:
                print_color(f"ignoring line: {line}", GRAY)
            modified_lines.append(line)

    print(toc)
    wants_toc = lines[5].split(":")[1].strip().lower() == "true"
    if wants_toc:
        toc = (
            "\n\n<br />\n<details>\n  <summary>Table of Contents</summary>\n\n<br/>\n\n"
            + "\n".join(toc)
            + "\n\n</details>\n\n"
        )
    else:
        toc = "\n\n"
    return "\n".join(modified_lines[:8] + toc.split("\n") + modified_lines[8:])


def process_images(content):
    """Process images in the given markdown content."""
    matches = re.findall(IMAGE_PATTERN, content)
    for match in matches:
        original_tag = (
            f'<Image src="{match[0]}" alt="{match[1]}" width={{{match[2]}}} />'
        )
        src, alt, width = match
        html_output = (
            f"<div style='display: flex; flex-direction: column; align-items: center; text-align: center;'>"
            f"<img src='{src}' alt='{alt}' width='{width}px' />"
            f"<i>{alt}</i>"
            f"</div>"
        )
        content = content.replace(original_tag, html_output)
    return content


def compile_logs(input_dir, output_dir):
    """Compile logs for production."""
    start_time = time.time()
    if not os.path.exists(input_dir):
        print_color(
            f"✗ directory '{input_dir}' does not exist. "
            f"place logs in this directory before building.",
            RED,
        )
        raise FileNotFoundError(f"directory '{input_dir}' does not exist.")

    Path(output_dir).mkdir(exist_ok=True)
    for file in os.listdir(output_dir):
        os.remove(os.path.join(output_dir, file))

    for md_file in Path(input_dir).glob("*.md"):
        with open(md_file, encoding="utf-8") as file:
            content = file.read()
        verify_content(markdown_content=content, filename=md_file.name)

    for md_file in Path(input_dir).glob("*.md"):
        with open(md_file, encoding="utf-8") as file:
            content = file.read()
        new_content = generate_toc_and_insert_anchors(content)
        new_content = process_images(new_content)

        output_file = Path(output_dir) / md_file.name
        with open(output_file, "w", encoding="utf-8") as file:
            file.write(new_content)

        print(f"Processed {md_file.name}")

    print_color("✓ ", GREEN, new_line=False)
    print(f"{len(os.listdir(input_dir))} logs transformed.")
    print_color(f"✓ built in {int((time.time() - start_time)*1000)}ms", GREEN)


if __name__ == "__main__":
    start_time = time.time()
    try:
        setup_script()
        compile_logs(input_dir=INPUT_DIR, output_dir=OUTPUT_DIR)
        print(f"✨ Done in {int((time.time() - start_time)*1000)}ms.")
    except Exception as e:
        print_color("✗ ", RED, new_line=False)
        print(f"Build failed in {int((time.time() - start_time)*1000)}ms. Exiting...")
        raise e
    os.system("rm -f vite.config.ts.timestamp-*")
