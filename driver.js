import { Tree } from "./BST.js";
import { Node } from "./BST.js";

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const sampleData = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const sortedArray = Array.from(new Set(sampleData.sort((a, b) => a - b)));
const tree = Tree(sortedArray);

// tree.insert(30)
// tree.deleteAt(4);
// let result = tree.find(4);
// console.log('Found')
// console.log(result)

// console.log("Level Order");
// tree.levelOrderForEach((val) => console.log(val.data));


// console.log("In Order");
// tree.inOrderForEach((val) => console.log(val.data));

// console.log("Pre Order");
// tree.preOrderForEach((val) => console.log(val.data));

// console.log("Post Order");
// tree.postOrderForEach((val) => console.log(val.data));

// console.log('Depth')
// let depth = tree.depth(6345)
// console.log(depth)

console.log('=====Tree=====');
console.log(prettyPrint(tree.root));
    