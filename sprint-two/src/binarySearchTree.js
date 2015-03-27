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
  traverse(this);



}

BinarySearchTree.prototype.contains = function(value){
  var flag = false;
  var traverse = function(node){
   // debugger;
    if (value === node.value){
      flag = true;
    }
    if (value > node.value){
      if(node.right === value){
        flag = true;
      }else{
         node.right && traverse(node.right);
      }
    }
    else if(value < node.value){
      if(node.left === value){
        flag = true;
      }else{
         node.left && traverse(node.left);
      }
    }
  };
  traverse(this);
  return flag;


}

BinarySearchTree.prototype.depthFirstLog = function(value){
  var traverse = function(node){
   // debugger;
    node && value(node.value);
    node.left && traverse(node.left);
    node.right && traverse(node.right);
  };
  traverse(this);

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
