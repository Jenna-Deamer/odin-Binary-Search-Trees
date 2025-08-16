const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
};


function Node(data) {
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
        console.log(start)
        console.log(end)

        let mid = start + Math.floor((end - start) / 2); // Middle of arr
        console.log("Mid " + mid)
        let root = new Node(arr[mid]);
        console.log(root)

        root.left = buildTree(arr, start, mid - 1);
        root.right = buildTree(arr, mid + 1, end);
        return root;

    }
    console.log(root)
    console.log(prettyPrint(root))

    return root;
}