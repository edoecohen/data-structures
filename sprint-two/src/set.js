var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  // TIME COMPLEXITY: O(n) - Time Linear
  if (this._storage.indexOf(item) < 0){
    this._storage.push(item);
  }
};

setPrototype.contains = function(item){
    // TIME COMPLEXITY: O(n) - Time Linear
    if (this._storage.indexOf(item) > -1){
      return true;
    }
    return false;

};

setPrototype.remove = function(item){
  // TIME COMPLEXITY: O(n) - Time Linear
  var index = this._storage.indexOf(item);
  if (index > -1){
    delete this._storage[index];
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
