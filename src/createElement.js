const createElement = (tagName, { attributes, children = [], sibling }) => {
  console.log(attributes);
  return {
    tagName,
    attributes,
    children,
    sibling
  };
};

export default createElement;
