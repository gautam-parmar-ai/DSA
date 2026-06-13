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
var lcaDeepestLeaves = function(root) {
    function dfs(node) {
        if (!node) {
            return [0, null];
        }

        const [leftDepth, leftLCA] = dfs(node.left);
        const [rightDepth, rightLCA] = dfs(node.right);

        if (leftDepth === rightDepth) {
            return [leftDepth + 1, node];
        }

        if (leftDepth > rightDepth) {
            return [leftDepth + 1, leftLCA];
        }

        return [rightDepth + 1, rightLCA];
    }

    return dfs(root)[1];
};