var Tree = function(value){
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value ;

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  // TIME COMPLEXITY: O(1) - Time Constant
  // Simply add the child to the parent.

  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  // TIME COMPLEXITY: O(N) - Time Linear
  // We need to traverse the entire tree

  var exists = false;
  var inner = function(node){
    if(node.value === target){
      exists = true;
    }
    else{
      for (var i = 0; i < node.children.length; i++){
         inner(node.children[i]);
      }
    }
  }
  inner(this);
  return exists;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
