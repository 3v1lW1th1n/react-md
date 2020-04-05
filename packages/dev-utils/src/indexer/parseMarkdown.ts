import * as marked from "marked";
import { decode } from "he";
import { TOCAnchor } from "./types";

interface MarkdownResult {
  anchors: readonly TOCAnchor[];
  summary: string;
}

const noop = (): string => "";
const identity = (s: string): string => s;

export default function parseMarkdown(markdown: string): MarkdownResult {
  const anchors: TOCAnchor[] = [];
  const renderer = new marked.Renderer({ gfm: true, sanitize: false });
  renderer.heading = (text, level, _raw, slugger) => {
    // if it is over 60 characters, it is probably not really a title
    const isNoMargin = text.includes("<!-- no-margin -->");
    const isForcedHeading = text.includes("<!-- force-heading -->");
    // replace comments since they will be slugged :/
    text = text.replace(/<!-- ([A-z]+(-[A-z]+)*) -->/g, "");

    const isValidHeading =
      isForcedHeading || (text.length <= 60 && !isNoMargin);

    if (
      !isValidHeading ||
      /^(@react-md|Table of Contents|About$)/i.test(text)
    ) {
      return "";
    }

    // `'t` gets slugged as 39t
    const id = slugger.slug(text.replace("🎉", "")).replace(/39t/g, "t");
    anchors.push({ anchor: `#${id}`, title: decode(text) });
    return "";
  };

  let summary = "";
  renderer.paragraph = (text) => {
    if (!summary && text !== "This guide will cover the following topics:") {
      summary = decode(text);
    }

    return text;
  };

  // renderer.blockquote
  // renderer.br
  // renderer.checkbox
  // renderer.code
  // renderer.codespan
  // renderer.del
  // renderer.em
  // renderer.heading
  // renderer.hr
  // renderer.html
  // renderer.image
  // renderer.link
  // renderer.list
  // renderer.listitem
  // renderer.paragraph
  // renderer.strong
  // renderer.table
  // renderer.tablecell
  // renderer.tablerow
  // renderer.text

  renderer.br = noop;
  renderer.checkbox = noop;
  renderer.hr = noop;
  renderer.html = noop;
  renderer.image = noop;
  renderer.table = noop;
  renderer.tablecell = noop;
  renderer.tablerow = noop;

  renderer.blockquote = identity;
  renderer.code = identity;
  renderer.codespan = identity;
  renderer.del = identity;
  renderer.em = identity;
  // renderer.list = identity;
  // renderer.listitem = text => `${text}`;
  renderer.strong = identity;
  renderer.text = identity;

  renderer.link = (href, tile, text) => text;

  marked.parse(markdown.replace(/(:tada:)/g, "🎉"), { renderer });

  return {
    anchors,
    summary: summary.replace(/\r?\n(?=[A-z0-9])/g, " "),
  };
}
