
/*
1) Given a binary search tree whose in-order and pre-order traversals are respectively 

in-order:
14 15 19 25 27 35 79 89 90 91

probably not this one --->
                                                      35
                                                    /     \
                                                  25      79
                                                  / \     / \
                                                15  27      90
                                                /\          /\
                                              14  19       89 91


                                              
probably this one ->
                      35
                    /    \
                  25      89
                  / \     / \
                15  27   79   91
                /\            /
              14  19         90


pre-order:
35 25 15 14 19 27 89 79 91 90

post-order:
14 19 15 27 25 79 90 91 89 35





2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?

post-order:
5 7 6 9 11 10 8

                    8
                 /     \
               6        10
              / \      /  \ 
            5    7    9   11

pre-order: 
8 6 5 7 10 9 11

*/


const BinarySearchTree = require('./BinarySearchTree')

let data = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]

function createTree(data) {

  let bTree = new BinarySearchTree()

  data.forEach(item => {
    bTree.insert(item)
  })

  return bTree
}

let bTree = createTree(data)
// console.log(bTree.left.left.key)

function dsfPreOrder(tree){
  // Pre-order
  console.log(tree.key)
  if (tree.left) {
      dsfPreOrder(tree.left);
  }
  if (tree.right) {
      dsfPreOrder(tree.right);
  }
}
// dsfPreOrder(bTree)
//25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90

function dsfInOrder(tree){
  if (tree.left) {
      dsfInOrder(tree.left);
  }
  console.log(tree.key)
  if (tree.right) {
      dsfInOrder(tree.right);
  }
}
// dsfInOrder(bTree)
//4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90

function dsfPostOrder(tree) {
  if (tree.left) {
      dsfPostOrder(tree.left);
  }
  if (tree.right) {
      dsfPostOrder(tree.right);
  }
  console.log(tree.key)
}
dsfPostOrder(bTree)
//4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25