/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const recursionHelper = (node) => {
    if (!node) {
        return
    }

    let temp = node.left
    node.left = node.right
    node.right = temp

    recursionHelper(node.left)
    recursionHelper(node.right)
}

var invertTree = function (root) {
    // do a breadth first search
    // whenever you're on a a valid node
    // switch the left and right children of the nodes

    // bfs algorithm
    // based off recursion
    // base case is if the node doesn't exist
    // do the thing
    // first go to the left child
    // then go to the right child


    if (!root) {
        return root
    }

    let temp = root.left
    root.left = root.right
    root.right = temp

    if (root.left) {
        invertTree(root.left)
    }
    if (root.right) {
        invertTree(root.right)
    }

    return root
}


export default invertTree
