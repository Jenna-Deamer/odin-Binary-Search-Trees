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
    let root = buildTree(arr);
    let start = arr[0];
    let end = arr[-1];

    function buildTree(arr, start, end) {
        if (start > end) return null 

        let mid = start + Math.floor((end - start) / 2); // Middle of arr
        let root = new Node(arr[mid]);

        root.left = buildTree(arr, start, mid - 1);
        root.right = buildTree(arr, mid + 1, end);

        return root;

    }

    return root;
}