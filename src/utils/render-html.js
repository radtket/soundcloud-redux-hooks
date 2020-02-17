import { createElement } from "react";
import htmlParser from "parse5";

import { styleParser, convertAttr } from "./helpers";

const renderNode = ({ nodeName, value, attrs, childNodes, tagName }, key) => {
  if (nodeName === "#text") {
    return value;
  }

  if (nodeName === "#comment") {
    return value;
  }

  const attr = attrs.reduce(
    (result, attribute) => {
      const name = convertAttr(attribute.name);

      return {
        ...result,
        [name]:
          name === "style" ? styleParser(attribute.value) : attribute.value,
      };
    },
    { key }
  );

  if (childNodes.length === 0) {
    return createElement(tagName, attr);
  }

  if (nodeName === "script") {
    attr.dangerouslySetInnerHTML = { __html: childNodes[0].value };
    return createElement("script", attr);
  }

  const children = childNodes.map(renderNode);
  return createElement(tagName, attr, children);
};

const renderHTML = html => {
  const htmlAST = htmlParser.parseFragment(html);

  if (htmlAST.childNodes.length === 0) {
    return null;
  }

  const result = htmlAST.childNodes.map(renderNode);
  return result.length === 1 ? result[0] : result;
};

export default renderHTML;
