var BinarySearchTree = function(value){

  var obj = Object.create(BinarySearchTree.prototype);

  obj.value = value;
  obj.right = null;
  obj.left = null;

  return obj;
};

BinarySearchTree.prototype.insert = function(value){

  var traverse = function(node){
  // TIME COMPLEXITY: O(log n) - Time Log
  // Slows down as we progress

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
  // TIME COMPLEXITY: O(log n) - Time Log
  // Slows down as we progress

  var flag = false;
  var traverse = function(node){

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
  // TIME COMPLEXITY: O(N) - Time Linear
  // Need to traverse the entire tree


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
