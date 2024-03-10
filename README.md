# azliu.cc

powered by [SvelteKit](https://kit.svelte.dev/) and [Tailwind CSS](https://tailwindcss.com/)

## development

run the website with 

```sh
yarn install
yarn dev
```

by default, logs won't show up, because they must be processed and generated with the script. to do this, run

```sh
python3 scripts/compile.py
```

raw logs should be written as `md` files in the `logs` folder.

## rendering logs

logs are roughly rendered in two steps: 

- raw markdown is compiled and formatted using a python script, which lives in `scripts/compile.py` (see [here](/scripts/compile.py)). the approximate functionality of this script is to parse the raw markdown, ensure that it is formatted correctly, and add things like links for headers and a table of contents.
- the output of the script is compiled into a format that Svelte can use by [mdsvex](https://github.com/pngwn/MDsveX).

using a script to do the first step could be viewed as overkill, but I wasn't able to find a better solution or library that does this for me.

another note is that logs are technically rendered as "dynamic" routes, meaning that they are not hardcoded. the site is still deployed as a static website through Svelte's static site generation (see [here](https://kit.svelte.dev/docs/adapter-static)).