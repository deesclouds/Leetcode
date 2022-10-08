/* You are given the root of a binary tree that consists of exactly 3 
nodes: the root, its left child, and its right child. 

Return true if the value of the root is equal to the sum of the values of 
its two children, or false otherwise.

Notes: remember the return spits out a boolean depending on if the function is true or false.

*/

/* Definition for a binary tree node.

function TreeNode(val, left, right){
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

/* @param {TreeNode} root
   @ return {boolean}
*/

var checkTree = function(root) {
	// comparisons will always return a boolean 
	// checks the value of root to see if root is equal to the sum of the left value within the root tree when added to the right value within the root tree. 
	return root.val == root.left.val + root.right.val;
};

