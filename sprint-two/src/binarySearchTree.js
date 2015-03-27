var BinarySearchTree = function(value){

  // Create a new node
  // If there are no nodes yet, new node is 'head node'
  // If there is a head node, then check R / L, and place accordingly
  //
  var obj = Object.create(BinarySearchTree.prototype);

  obj.value = value;
  obj.right = null;
  obj.left = null;
  //debugger;
  // if obj is emptry obj.inse

  return obj;
};

BinarySearchTree.prototype.insert = function(value){
  // while (node != null)
  // if(value < node.value ){
  //  if (node.left === null){
  //    node.left = treeNode(value);
  //   }else{
  //    node = node.left
  //   }
  //  else if
  // }
  // node = node.left or node.right
  var traverse = function(node){
   // debugger;
    if (value > node.value){
      if(node.right === null){
        node.right = treeNode(value);
      }else{
        traverse(node.right);
      }
    }
    else if(value < node.value){
      if(node.left === null){
        node.left = treeNode(value);
      }else{
        traverse(node.left);
      }
    }
  };
  traverse(this.value);



}

BinarySearchTree.prototype.contains = function(value){

}

BinarySearchTree.prototype.depthFirstLog = function(value){

}

var treeNode = function(value){
  var node = {};
  node.value = value;
  node.right = null;
  node.left = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
