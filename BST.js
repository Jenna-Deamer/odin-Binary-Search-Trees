export function Node(data) {
    return {
        data,
        left: null,
        right: null,
    };
}

export function Tree(arr) {
    let root = buildTree(arr, 0, arr.length - 1);

    function buildTree(arr, start, end) {
        if (start > end) return null;

        let mid = start + Math.floor((end - start) / 2); // Middle of arr
        let root = new Node(arr[mid]);

        root.left = buildTree(arr, start, mid - 1);
        root.right = buildTree(arr, mid + 1, end);
        return root;
    }
    // console.log(root)
    // console.log(prettyPrint(root))

    function insert(value, currentNode = root) {
        value = Number(value); // convert to number
        if (currentNode == null) {
            console.log("creating node....");
            return new Node(value);
        }
        if (currentNode.data === value) {
            console.log("Node exists in tree!");
            return currentNode;
        }
        if (value < currentNode.data) {
            currentNode.left = insert(value, currentNode.left);
        } else {
            currentNode.right = insert(value, currentNode.right);
        }
        return currentNode;
    }

    function getSuccessor(curr) {
        curr = curr.right;
        while (curr !== null && curr.left !== null) {
            curr = curr.left;
        }
        return curr;
    }

    function deleteAt(value, currentNode = root) {
        if (currentNode === null) {
            return currentNode; // not found
        }
        console.log("current node is");
        console.log(currentNode);

        // Search for value to be deleted
        if (currentNode.data > value) {
            currentNode.left = deleteAt(value, currentNode.left);
        } else if (currentNode.data < value) {
            currentNode.right = deleteAt(value, currentNode.right);
        } else {
            // Node to be deleted found

            // No children or 1 child
            if (!currentNode.left) {
                console.log("no left");
                return currentNode.right;
            } else if (!currentNode.right) {
                console.log("no right");
                return currentNode.left;
            }

            // Two children
            let successor = getSuccessor(currentNode);
            currentNode.data = successor.data; // replace value
            currentNode.right = deleteAt(successor.data, currentNode.right);
        }
        return currentNode;
    }

    function find(value, currentNode = root) {
        if (currentNode === null) {
            return null; // Not found
        }

        if (currentNode.data > value) {
            return find(value, currentNode.left)
        } else if (currentNode.data < value) {
            return find(value, currentNode.right);
        } else {
            return currentNode;
        }
    }

    function levelOrderForEach(callback) {
        if (callback === null) {
            throw new Error("Can't proceed without callback");
        }
        if (root === null) {
            return null;
        }
        let current;
        let queue = [root];

        while (queue.length > 0) {
            current = queue.shift();
            callback(current); // foreach node call cb

            // enqueue all left & right children
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
    }

    function inOrderForEach(callback, currentNode = root) {
        if (callback === null) {
            throw new Error("Can't proceed without callback");
        }
        if (currentNode === null) {
            return;
        }

        inOrderForEach(callback, currentNode.left);
        callback(currentNode);
        inOrderForEach(callback, currentNode.right);
    }

    function preOrderForEach(callback, currentNode = root) {
        if (callback === null) {
            throw new Error("Can't proceed without callback");
        }
        if (currentNode === null) {
            return;
        }

        callback(currentNode);
        preOrderForEach(callback, currentNode.left);
        preOrderForEach(callback, currentNode.right);
    }

    function postOrderForEach(callback, currentNode = root) {
        if (callback === null) {
            throw new Error("Can't proceed without callback");
        }
        if (currentNode === null) {
            return;
        }

        postOrderForEach(callback, currentNode.left);
        postOrderForEach(callback, currentNode.right);
        callback(currentNode);
    }

    function calcHeight(node) {
        if (node === null) {
            return -1;
        }
        return Math.max(calcHeight(node.left), calcHeight(node.right)) + 1;
    }

    function height(value) {
        let node = find(value);
        if (node === null) {
            return null;
        } else {
            let h = calcHeight(node)
            return h;
        }
    }

    function depth(value, currentNode = root, d = 0) {
        if (currentNode === null) {
            return null;
        }

        if (currentNode.data > value) {
          return depth(value, currentNode.left, d + 1);
        } else if (currentNode.data < value) {
           return depth(value, currentNode.right, d + 1);
        } else {
            console.log(d)
            return d;
        }
        return currentNode;
    }

    function isBalanced(currentNode = root) {
        if (currentNode === null) {
            return true;
        }
        const leftHeight = height(currentNode.left)
        const rightHeight = height(currentNode.right)
        // return absolute value
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        }

        return isBalanced(currentNode.left) && isBalanced(currentNode.right)

    }

    return {
        root,
        insert,
        deleteAt,
        find,
        levelOrderForEach,
        preOrderForEach,
        inOrderForEach,
        postOrderForEach,
        height,
        depth,
        isBalanced
    };
}
