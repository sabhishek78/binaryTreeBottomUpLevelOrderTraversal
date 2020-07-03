// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  let outputArray=[];
   for(let i=0;2*Math.pow(2,i)-1<=root.length;i++){
     outputArray.push(root.slice(Math.pow(2,i)-1,2*Math.pow(2,i)-1));
   } 
   outputArray.reverse();
   let resultArray=[];
   for(let i=0;i<outputArray.length;i++){
      let temp=[];
      for(let j=0;j<outputArray[i].length;j++){
           if(outputArray[i][j]!==null){
             temp.push(outputArray[i][j]);
           }
          }
       resultArray.push(temp);
    }
    return resultArray;
};
console.log(levelOrderBottom([3,9,20,null,null,15,7]));