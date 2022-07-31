const HEADINGS = {
  1: "text-xl",
  2: "text-lg",
  3: "text-md",
  4: "text",
  5: "text-sm",
  6: "text-sm",
};

const USER = /@([\w-]+)/gm;
const PULL = /(?<!&)#(\d+)/gm;

export const RENDERER = (repository: string) => ({
  heading(text: string, level: 1 | 2 | 3 | 4 | 5 | 6): string {
    return `<div class="${HEADINGS[level]} mt-4 mb-3">${text}</div>`;
  },
  list(body: string, ordered: boolean, start: number): string {
    const type = ordered ? "ol" : "ul",
      startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return `<${type}${startatt} class="list-disc ml-6">\n${body}</${type}>`;
  },
  listitem(text: string, task: boolean, checked: boolean): string {
    text = text.replace(USER, (substring, args) => {
      return `<a class="text-is-red" href="https://github.com/${args}">@${args}</a>`;
    });
    // we can't differ between issue or pull request links, as GitHub does not send that information
    text = text.replace(PULL, (substring, args) => {
      return `<a class="text-is-red" href="https://github.com/IntellectualSites/${repository}/pull/${args}">#${args}</a>`;
    });
    return `<li>${text}</li>`;
  },
});
