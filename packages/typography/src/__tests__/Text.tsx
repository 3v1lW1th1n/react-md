import * as React from "react";
import { create, ReactTestRendererJSON } from "react-test-renderer";

import Text from "../Text";

export function createSnapshot(children: React.ReactElement<any>): ReactTestRendererJSON | null {
  return create(children).toJSON();
}

export function expectSnapshot(children: React.ReactElement<any>): void {
  expect(createSnapshot(children)).toMatchSnapshot();
}

const HELLO_WORLD = "Hello, world!";
const LONG_TEXT =
  "This is another string that is just some text. I'm not sure how helpful this is though.";

describe("Text", () => {
  describe("rendering return value", () => {
    it("should render a text string when there are no additional props provided", () => {
      expectSnapshot(<Text>{HELLO_WORLD}</Text>);
      expectSnapshot(<Text>{LONG_TEXT}</Text>);
    });

    it("should render as the provided tagName prop", () => {
      expectSnapshot(<Text tagName="h1">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text tagName="h2">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text tagName="h3">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text tagName="h4">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text tagName="h5">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text tagName="h6">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text tagName="p">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text tagName="span">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text tagName="div">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text tagName="button">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text tagName="caption">{HELLO_WORLD}</Text>);
    });

    it("should render as the correct tag based on the type prop", () => {
      expectSnapshot(<Text type="headline-1">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text type="headline-2">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text type="headline-3">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text type="headline-4">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text type="headline-5">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text type="headline-6">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text type="subtitle-1">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text type="subtitle-2">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text type="body-1">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text type="body-2">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text type="caption">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text type="button">{HELLO_WORLD}</Text>);
      expectSnapshot(<Text type="overline">{HELLO_WORLD}</Text>);
    });

    it("should render as the provided tagName even if the type prop is set", () => {
      expectSnapshot(
        <Text tagName="h1" type="headline-1">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h1" type="headline-2">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h1" type="headline-3">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h1" type="headline-4">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h1" type="headline-5">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h1" type="headline-6">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h1" type="subtitle-1">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h1" type="subtitle-2">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h1" type="caption">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h1" type="button">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h1" type="overline">
          {HELLO_WORLD}
        </Text>
      );

      expectSnapshot(
        <Text tagName="h2" type="headline-1">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h2" type="headline-2">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h2" type="headline-3">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h2" type="headline-4">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h2" type="headline-5">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h2" type="headline-6">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h2" type="subtitle-1">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h2" type="subtitle-2">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h2" type="caption">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h2" type="button">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h2" type="overline">
          {HELLO_WORLD}
        </Text>
      );

      expectSnapshot(
        <Text tagName="h3" type="headline-1">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h3" type="headline-2">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h3" type="headline-3">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h3" type="headline-4">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h3" type="headline-5">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h3" type="headline-6">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h3" type="subtitle-1">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h3" type="subtitle-2">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h3" type="caption">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h3" type="button">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h3" type="overline">
          {HELLO_WORLD}
        </Text>
      );

      expectSnapshot(
        <Text tagName="h4" type="headline-1">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h4" type="headline-2">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h4" type="headline-3">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h4" type="headline-4">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h4" type="headline-5">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h4" type="headline-6">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h4" type="subtitle-1">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h4" type="subtitle-2">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h4" type="caption">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h4" type="button">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h4" type="overline">
          {HELLO_WORLD}
        </Text>
      );

      expectSnapshot(
        <Text tagName="h5" type="headline-1">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h5" type="headline-2">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h5" type="headline-3">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h5" type="headline-4">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h5" type="headline-5">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h5" type="headline-6">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h5" type="subtitle-1">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h5" type="subtitle-2">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h5" type="caption">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h5" type="button">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h5" type="overline">
          {HELLO_WORLD}
        </Text>
      );

      expectSnapshot(
        <Text tagName="h6" type="headline-1">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h6" type="headline-2">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h6" type="headline-3">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h6" type="headline-4">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h6" type="headline-5">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h6" type="headline-6">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h6" type="subtitle-1">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h6" type="subtitle-2">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h6" type="caption">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h6" type="button">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="h6" type="overline">
          {HELLO_WORLD}
        </Text>
      );

      expectSnapshot(
        <Text tagName="p" type="headline-1">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="p" type="headline-2">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="p" type="headline-3">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="p" type="headline-4">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="p" type="headline-5">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="p" type="headline-6">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="p" type="subtitle-1">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="p" type="subtitle-2">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="p" type="caption">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="p" type="button">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="p" type="overline">
          {HELLO_WORLD}
        </Text>
      );

      expectSnapshot(
        <Text tagName="caption" type="headline-1">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="caption" type="headline-2">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="caption" type="headline-3">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="caption" type="headline-4">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="caption" type="headline-5">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="caption" type="headline-6">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="caption" type="subtitle-1">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="caption" type="subtitle-2">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="caption" type="caption">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="caption" type="button">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="caption" type="overline">
          {HELLO_WORLD}
        </Text>
      );

      expectSnapshot(
        <Text tagName="span" type="headline-1">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="span" type="headline-2">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="span" type="headline-3">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="span" type="headline-4">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="span" type="headline-5">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="span" type="headline-6">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="span" type="subtitle-1">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="span" type="subtitle-2">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="span" type="caption">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="span" type="button">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="span" type="overline">
          {HELLO_WORLD}
        </Text>
      );

      expectSnapshot(
        <Text tagName="div" type="headline-1">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="div" type="headline-2">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="div" type="headline-3">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="div" type="headline-4">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="div" type="headline-5">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="div" type="headline-6">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="div" type="subtitle-1">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="div" type="subtitle-2">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="div" type="caption">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="div" type="button">
          {HELLO_WORLD}
        </Text>
      );
      expectSnapshot(
        <Text tagName="div" type="overline">
          {HELLO_WORLD}
        </Text>
      );
    });
  });

  it("should provide the className if the children is a callback function", () => {
    expectSnapshot(
      <Text>{({ className }) => <div className={className}>{HELLO_WORLD}</div>}</Text>
    );
  });
});
