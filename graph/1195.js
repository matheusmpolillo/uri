const ReadLine = require('readline');

let n = null, count = 0, lengths = [], values = [];

const r1 = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.on('line', input => {
    if (n === null) {
        n = input;
        count = (n * 2) + 1;
    } else if (count % 2 === 0) {
        lengths.push(input);
    } else {
        values.push(input);
    }

    if (count == 1) r1.close();
    count--;
});

r1.on('close', () => {
    values.forEach(value => {
        let tree = {};

        value.split(' ').forEach(splitedValue => {
            Tree.node(tree, splitedValue);
        });

        console.log(`Case ${count}:`);
        console.log(`Pre.: ${Tree.prefix(tree).toString().replace(/,/g, ' ')}`);
        console.log(`In..: ${Tree.infix(tree).toString().replace(/,/g, ' ')}`);
        console.log(`Post: ${Tree.postfix(tree).toString().replace(/,/g, ' ')}\n`);

        count++;
    });
});

let Tree = {
    node(tree, value) {
        value = parseInt(value);
        if (!tree.hasOwnProperty('root')) {
            tree.root = value;
            tree.left = {};
            tree.right = {};
        } else {
            if (value <= tree.root) {
                Tree.node(tree.left, value);
            } else {
                Tree.node(tree.right, value);
            }
        }
    },

    prefix(tree) {
        let treeRawValues = Object.values(tree),
            prefixValues = [];

        treeRawValues.forEach(rawValue => {
            if (typeof (rawValue) != 'object') {
                prefixValues.push(rawValue);
            } else {
                Tree.prefix(rawValue).forEach(value => {
                    prefixValues.push(value);
                });
            }
        });

        return prefixValues
    },

    infix(tree) {
        let treeRawValues = Tree.prefix(tree);
        return treeRawValues.sort((a, b) => { return a - b })
    },

    postfix(tree) {
        let treeRawValues = Object.values(tree),
            postfixValues = [];

        if (typeof (tree) == 'object') {
            if (tree.hasOwnProperty('root')) {
                if (tree.left.hasOwnProperty('root')) {
                    Tree.postfix(tree.left).forEach(value => {
                        postfixValues.push(value);
                    });
                }
                if (tree.right.hasOwnProperty('root')) {
                    Tree.postfix(tree.right).forEach(value => {
                        postfixValues.push(value);
                    });
                }
                if (!tree.left.hasOwnProperty('root') && !tree.right.hasOwnProperty('root')) {
                    postfixValues.push(tree.root);
                } else {
                   postfixValues.push(tree.root);
                }
            }
        }

        return postfixValues
    }
}
