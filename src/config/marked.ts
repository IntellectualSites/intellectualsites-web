import type { marked, Renderer } from "marked";

const HEADINGS = {
  1: "text-2xl",
  2: "text-xl",
  3: "text-xl",
  4: "text-l",
  5: "text-m",
  6: "text",
};

export const RENDERER: Renderer<string> = {
  heading(
    text: string,
    level: 1 | 2 | 3 | 4 | 5 | 6,
    raw: string,
    slugger: marked.Slugger
  ): string {
    return `<h2 class="${HEADINGS[level]} my-3">${text}</h2>`;
  },
  list(body: string, ordered: boolean, start: number): string {
    const type = ordered ? "ol" : "ul",
      startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return `<${type}${startatt} class="list-disc ml-6">\n${body}</${type}>\n`;
  },
};
