export function Node(data) {
  return {
    data,
    left: null,
    right: null
  };
}

export function Tree(arr) {
  let root = buildTree(arr, 0, arr.length - 1);


  function buildTree(arr, start, end) {
    if (start > end) return null

    let mid = start + Math.floor((end - start) / 2); // Middle of arr
    let root = new Node(arr[mid]);

    root.left = buildTree(arr, start, mid - 1);
    root.right = buildTree(arr, mid + 1, end);
    return root;

  }
  // console.log(root)
  // console.log(prettyPrint(root))

  function insert(value, currentNode = root) {
    if (currentNode == null) {
      console.log('creating node....')
      root = new Node(value);
      return root;
    }
    if (currentNode.data === value) {
      console.log('Node exists in tree!')
      return currentNode;
    }
    if (value < currentNode.data) {
      currentNode.left = insert(value,currentNode.left);
    } else {
      currentNode.right = insert(value, currentNode.right);
    }
    return currentNode
  }

  return { root, insert };


}