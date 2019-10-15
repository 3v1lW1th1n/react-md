/* eslint-disable react/no-danger */
import React, {
  FC,
  useState,
  useEffect,
  useMemo,
  HTMLAttributes,
  Fragment,
  useRef,
  MutableRefObject,
} from "react";
import cn from "classnames";
import Router from "next/router";

import GoogleFont from "components/GoogleFont";

import "./Markdown.scss";
import { markdownToHTML } from "./utils";

function useMarkdownResolver(markdown: MarkdownProps["children"]): string {
  /* eslint-disable react-hooks/rules-of-hooks */
  // i will never swap between strings and promises
  if (typeof markdown === "string") {
    return markdown;
  }

  const [resolved, setResolved] = useState("");
  useEffect(() => {
    markdown().then(md => {
      if (typeof md === "string") {
        setResolved(md);
      } else if (typeof md.default === "string") {
        setResolved(md.default);
      }
    });
  }, [markdown]);

  return resolved;
}

interface DangerHTML {
  __html: string;
}

function useHTML(children: MarkdownChildren): DangerHTML {
  const markdown = useMarkdownResolver(children);
  const html = useMemo(
    () => ({
      __html: markdownToHTML(markdown),
    }),
    [markdown]
  );

  return html;
}

function useLinkUpdates({
  __html: html,
}: DangerHTML): MutableRefObject<HTMLDivElement | null> {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const { origin } = window.location;
    Array.from(
      ref.current.querySelectorAll<HTMLAnchorElement>("a[href]")
    ).forEach(link => {
      if (link.href.startsWith(origin)) {
        link.onclick = event => {
          event.preventDefault();
          const href = link.href.replace(origin, "");
          Router.push(href);
        };
      }
    });
  }, [html]);

  return ref;
}

export type ResolveMarkdown = () => Promise<string | { default: string }>;
export type MarkdownChildren = string | ResolveMarkdown;

export interface MarkdownProps extends HTMLAttributes<HTMLDivElement> {
  children: ResolveMarkdown | string;
}

const Markdown: FC<MarkdownProps> = ({ className, children, ...props }) => {
  const html = useHTML(children);
  const ref = useLinkUpdates(html);
  return (
    <Fragment>
      <GoogleFont font="Source Code Pro" />
      <div
        {...props}
        ref={ref}
        className={cn("markdown-container", className)}
        dangerouslySetInnerHTML={html}
      />
    </Fragment>
  );
};

export default Markdown;