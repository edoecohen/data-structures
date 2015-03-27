

var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(node){
  // TIME COMPLEXITY: O(1) - Time Constant
  // Simply adding a node to the graph

  var nodeObj = {
    name: node,
    edges: []
  };
  this.storage[nodeObj.name] = nodeObj;

};

Graph.prototype.contains = function(node){
  // TIME COMPLEXITY: O(N) - Time Linear
  // Need to traverse the entire graph

  for(var key in this.storage){
    if (this.storage[key].name === node ){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  // TIME COMPLEXITY: O(1) - Time Constant
  // Simply remove node from the graph.

  if(this.contains(node)){
    delete this.storage[node];
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  // TIME COMPLEXITY: O(N) - Time Linear
  // Lookup the node and travers edges property to find the edge

  var temp = this.storage[fromNode].edges;
  for (var i =0; i< temp.length; i++){
    if (temp[i] === toNode){
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  // TIME COMPLEXITY: O(1) - Time Constant
  // Simple push to the edges array

  this.storage[fromNode].edges.push(toNode);
  this.storage[toNode].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  // TIME COMPLEXITY: O(n) - Time Linear

  var temp = this.storage[fromNode].edges;
  for (var i =0; i< temp.length; i++){
    if (temp[i] === toNode){
     delete this.storage[fromNode].edges[i];
    }
  }
  var temp1 = this.storage[toNode].edges;
  for (var i =0; i< temp1.length; i++){
    if (temp1[i] === fromNode){
     delete this.storage[toNode].edges[i];
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  // TIME COMPLEXITY: O(N) - Time Linear
  for (var key in this.storage){
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



