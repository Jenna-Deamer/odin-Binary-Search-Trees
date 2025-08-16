import {Tree} from "./BST.js";
const sampleData = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const sortedArray = Array.from(new Set(sampleData.sort((a, b) => a-b)));
const test = Tree(sortedArray);
console.log(test)