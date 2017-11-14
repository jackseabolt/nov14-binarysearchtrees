const { BinarySearchTree } = require('./binarysearchtree'); 

let ourTree = new BinarySearchTree();
ourTree.insert(4, 4)
ourTree.insert(2, 2)
ourTree.insert(3, 3)
ourTree.insert(1, 1)
ourTree.insert(5, 5)
ourTree.insert(6, 6)
ourTree.insert(0, 0)
ourTree.insert(8, 8)
ourTree.insert(9, 9)
ourTree.insert(10, 10)
ourTree.insert(8, 8)
ourTree.insert(8, 8)


function findHeight(searchTree) {

    let finalLeft = null; 
    let finalRight = null; 
    if(searchTree.left === null && searchTree.right === null) {
        return 1; 
    }
    if(searchTree.left) {
       finalLeft = findHeight(searchTree.left) + 1; 
    }
    if(searchTree.right) {
       finalRight = findHeight(searchTree.right) + 1; 
    }
    if(finalRight > finalLeft) {
        return finalRight
    }
    else {
        return finalLeft; 
    }
}

console.log(findHeight(ourTree));


// function height(node) {
//     if (!node) return 0;
//     var leftHeight = height(node.left);
//     var rightHeight = height(node.right);
   
//     return Math.max(leftHeight, rightHeight) + 1;
//    }



