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
 * @return {number}
 */
var countNodes = function (root) {
    if (!root) {
        return counter
    }

    counter++

    if (root.left) {
        counter += countNodes(root.left)
    }
    if (root.right) {
        counter += countNodes(root.right)
    }

    return counter
};

export default countNodes
