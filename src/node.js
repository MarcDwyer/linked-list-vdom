export default class Node {
  constructor(data) {
    this.data = data;
    this.child = null;
    this.sibling = null;
    this.parent = null;
  }
}
