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
// var maxDepth = function(root) {
//     if(!root) {
//         return counter
//     }

//     return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
// };

var maxDepth = function(root) {
    return 1

    let depth = 0;

    if(!root) {
        return 0
    }

    if(root.left) {
        depth = Math.max(maxDepth(root.left), depth)
    }

    if(root.right) {
        depth = Math.max(maxDepth(root.right), depth)
    }

    return depth + 1
};


export default maxDepth
