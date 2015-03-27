var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  // TIME COMPLEXITY: O(1) - Time Constant
    var i = getIndexBelowMaxForKey(k, this._limit);
    if (this._storage.get(i) === undefined){
      this._storage.set(i, new Array([k,v]));
    }
    else {
      this._storage.get(i).push([k,v]);
    }
};

HashTable.prototype.retrieve = function(k){
  // TIME COMPLEXITY: O(1) - Time Constant
  var i = getIndexBelowMaxForKey(k, this._limit);
  var curAr = this._storage.get(i);
  for( var j = 0; j < curAr.length; j++ ){
    if (curAr[j] === undefined){
      return null
    }
    else if (curAr[j][0] === k){
      return curAr[j][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  // TIME COMPLEXITY: O(1) - Time Constant
  var i = getIndexBelowMaxForKey(k, this._limit);
  var curArray = this._storage.get(i);
  for (var j = 0; j< curArray.length; j++){
    if(curArray[j][0]=== k){
      delete curArray[j];
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
