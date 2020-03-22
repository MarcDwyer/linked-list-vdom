const createElement = (tagName, { attributes, children = [], sibling }) => {
  return {
    tagName,
    attributes,
    children,
    sibling
  };
};

export default createElement;
