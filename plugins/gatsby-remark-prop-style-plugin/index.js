const visit = require('unist-util-visit');
const unistBuilder = require('unist-builder');

const REGEX = /\[\[(.*?)\]\]/;
const REGEX_GLOBAL = /\[\[(.*?)\]\]/g;

function constructMarker(markedText) {
  // https://github.com/syntax-tree/mdast-util-to-hast#example-supporting-custom-nodes
  return {
    attributes: [],
    children: [
      {
        type: 'text',
        value: markedText,
      },
    ],
    data: { _mdxExplicitJsx: true },
    name: 'Prop',
    type: 'mdxJsxTextElement',
  };
}

module.exports = function () {
  return function (node) {
    visit(node, 'text', (node, index, parent) => {
      if (!parent) return;
      if (!REGEX.test(node.value)) return;

      const children = [];
      const value = node.value;
      let tempValue = '';
      let prevMatchIndex = 0;
      let prevMatchLength = 0;
      const matches = Array.from(value.matchAll(REGEX_GLOBAL));

      for (let index = 0; index < matches.length; index++) {
        const match = matches[index];

        const mIndex = match.index ?? 0;
        const mLength = match[0].length; // match[0] is the matched input

        // could be a text part before each matched part
        const textPartIndex = index === 0 ? 0 : prevMatchIndex + prevMatchLength;

        prevMatchIndex = mIndex;
        prevMatchLength = mLength;

        // if there is a text part before
        if (mIndex > textPartIndex) {
          const textValue = value.substring(textPartIndex, mIndex);

          const textNode = unistBuilder('text', textValue);
          children.push(textNode);
        }

        const markedText = match[1];

        const markerNode = constructMarker(markedText);

        children.push(markerNode);

        // control for the last text node if exists after the last match
        tempValue = value.slice(mIndex + mLength);
      }

      // if there is still text after the last match
      if (tempValue) {
        const textNode = unistBuilder('text', tempValue);
        children.push(textNode);
      }

      if (children.length) parent.children.splice(index, 1, ...children);
    });
  };
};
