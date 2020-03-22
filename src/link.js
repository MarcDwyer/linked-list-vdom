import Node from "./node";

function link(elements) {
  const buildChildren = (parent, children) => {
    //TODO firstChild needs to be in the loop to check for children
    const firstChild = new Node(children[0]);
    if (children.length <= 1) return firstChild;

    let prevChild;
    for (let i = 1; i < children.length; i++) {
      let current = children[i];
      const newNode = new Node(current);
      newNode.parent = parent;
      if (prevChild) {
        prevChild.sibling = newNode;
      } else {
        firstChild.sibling = newNode;
      }
      if (newNode.data.children.length) {
        newNode.child = buildChildren(parent, newNode.data.children);
      }
    }
    return firstChild;
  };

  let parentEle;
  let prevEle;
  for (let i = 0; i < elements.length; i++) {
    const current = elements[i];
    const node = new Node(current);
    if (current.children.length) {
      node.child = buildChildren(node, current.children);
    }
    if (!parentEle) {
      parentEle = node;
      continue;
    }
    if (prevEle) {
      prevEle.sibling = node;
    } else {
      parentEle.sibling = node;
    }
    prevEle = node;
  }
  return parentEle;
}

export default link;
