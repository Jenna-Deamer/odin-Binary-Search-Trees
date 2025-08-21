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

const sampleData = [72, 15, 98,36,2,3,5, 43, 6, 57, 81, 24, 33, 90, 12, 65, 49, 8, 37, 76, 58, 91, 3, 84, 19, 67, 29, 54, 40];
const sortedArray = Array.from(new Set(sampleData.sort((a, b) => a - b)));
const tree = Tree(sortedArray);




// tree.deleteAt(4);
// let result = tree.depth(23);
// console.log('Found')
// console.log(result)

console.log("Level Order");
tree.levelOrderForEach((val) => console.log(val.data));


console.log("In Order");
tree.inOrderForEach((val) => console.log(val.data));

console.log("Pre Order");
tree.preOrderForEach((val) => console.log(val.data));

console.log("Post Order");
tree.postOrderForEach((val) => console.log(val.data));

// console.log('Depth')
// let depth = tree.depth(6345)
// console.log(depth)

console.log('=====Tree=====');
console.log(prettyPrint(tree.root));

console.log(tree.isBalanced());
tree.insert(2)
tree.insert(22)
tree.insert(44444)
console.log(tree.isBalanced());
let result =  tree.rebalance();
console.log(tree.isBalanced());
console.log(result)

    