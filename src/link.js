import Node from "./node";

function link(elements) {
  const buildChildren = (parent, children) => {
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
      console.log(newNode);
      if (newNode.data.children.length) {
        newNode.child = buildChildren(parent, newNode.data.children);
      }
    }
    return firstChild;
  };
  const firstEle = new Node(elements[0]);

  for (let i = 1; i < elements.length; i++) {
    const current = elements[i];
    const node = new Node(current);
    if (current.children.length) {
      node.child = buildChildren(node, current.children);
    }
    firstEle.sibling = node;
  }
  return firstEle;
}

export default link;
