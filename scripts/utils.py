RED = "\033[91m"
GREEN = "\033[92m"
CYAN = "\033[96m"
GRAY = "\033[37m"
RESET = "\033[0m"


def print_color(text, color, new_line=True):
    if new_line:
        print(f"{color}{text}{RESET}")
    else:
        print(f"{color}{text}{RESET}", end="")
