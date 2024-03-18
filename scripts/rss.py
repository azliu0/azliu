import glob
from xml.etree.ElementTree import Element, SubElement, tostring
from xml.dom.minidom import parseString
import datetime

RSS_FEED_FILE = "static/feed.xml"
RSS_FEED_TITLE = "Andrew Liu's Logs"
RSS_FEED_DESC = "I'm Andrew Liu, an undergraduate studying Computer Science (course 6) and Mathematics (course 18) at MIT."


def parse_metadata(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        lines = file.read().split("---")[1].strip().split("\n")
        metadata = {
            line.split(":")[0].strip(): line.split(":", 1)[1].strip().strip("'")
            for line in lines
        }
    return metadata


def create_rss_feed(blogs, title, link, description):
    rss = Element("rss")
    rss.set("version", "2.0")
    channel = SubElement(rss, "channel")
    title_elem = SubElement(channel, "title")
    title_elem.text = title
    link_elem = SubElement(channel, "link")
    link_elem.text = link
    description_elem = SubElement(channel, "description")
    description_elem.text = description

    for blog in blogs:
        item = SubElement(channel, "item")
        title_elem = SubElement(item, "title")
        title_elem.text = blog["title"]
        link_elem = SubElement(item, "link")
        link_elem.text = blog["link"]
        guid = SubElement(item, "guid")
        guid.text = blog["link"]
        guid.set("isPermalink", "true")
        description_elem = SubElement(item, "description")
        description_elem.text = blog["subtitle"]
        pubDate = SubElement(item, "pubDate")
        pubDate.text = datetime.datetime.strptime(blog["date"], "%Y-%m-%d").strftime(
            "%a, %d %b %Y %H:%M:%S +0000"
        )

    return parseString(tostring(rss)).toprettyxml(indent="  ")


def generate_rss_feed():
    blog_files = glob.glob("static/md/*.md")
    blogs = []
    for file_path in blog_files:
        metadata = parse_metadata(file_path)
        if metadata.get("published", "false") == "true":
            blog_data = {
                "title": metadata["title"],
                "subtitle": metadata["subtitle"],
                "date": metadata["date"],
                "link": f'https://azliu.cc/logs/{file_path.replace("static/md/", "").replace(".md","")}',
            }
            blogs.append(blog_data)

    blogs = sorted(blogs, key=lambda x: x["date"], reverse=True)

    rss_feed = create_rss_feed(
        blogs,
        RSS_FEED_TITLE,
        "https://azliu.cc/logs",
        RSS_FEED_DESC,
    )

    with open(RSS_FEED_FILE, "w", encoding="utf-8") as rss_file:
        rss_file.write(rss_feed)


if __name__ == "__main__":
    generate_rss_feed()
