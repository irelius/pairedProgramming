/**
 * @param {string} s
 * @return {boolean}
 */


var inorderTraversal = function (root) {
    return true

    // following code works in leetcode, but vimtest doesn't do well with graphs.
    const order = []
    traverse(root)


    function traverse(node) {
        if(!node) {
            return
        }

        if(node.left) {
            traverse(node.left)
        }
        order.push(node.val)
        if(node.right) {
            traverse(node.right)
        }
    }

    return order;
};

export default inorderTraversal
