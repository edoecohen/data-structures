var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  // TIME COMPLEXITY: O(1) - Time Constant

  var usage =  this._size / this._limit;

  if( usage >= 0.55 ){

    this._limit *= 2;

    var temp = LimitedArray(this._limit);
    var temp_limit = this._limit;

    this._storage.each( function(val){

      if (val !== undefined){
        var tempKey = val[0][0];
        var k = getIndexBelowMaxForKey(tempKey, temp_limit);

        temp.set(k, val);
      }
    });

    this._storage = temp;
  }

  var i = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(i) === undefined){
    this._storage.set(i, new Array([k,v]));
  }
  else {
    this._storage.get(i).push([k,v]);
  }

  // Increment local storage size counter
  this._size++;
};

HashTable.prototype.retrieve = function(k){
  // TIME COMPLEXITY: O(1) - Time Constant
  var i = getIndexBelowMaxForKey(k, this._limit);
  var curAr = this._storage.get(i);
  if(curAr !== undefined){
    for( var j = 0; j < curAr.length; j++ ){
      if (curAr[j] === undefined){
        return null;
      }
      else if (curAr[j][0] === k){
        return curAr[j][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  // TIME COMPLEXITY: O(1) - Time Constant

  var usage =  this._size / this._limit;

  if( usage <= 0.25 ){

    this._limit = this._limit / 2;

    var temp_limit = this._limit;
    var temp = LimitedArray(this._limit);

    this._storage.each( function(val){

      if (val !== undefined){
        if(val[0] !== undefined){
          var tempKey = val[0][0];
          var k = getIndexBelowMaxForKey(tempKey, temp_limit);
          temp.set(k, val);
        }

      }
    });

    this._storage = temp;
  }

  var i = getIndexBelowMaxForKey(k, this._limit);
  var curArray = this._storage.get(i);


  for (var j = 0; j< curArray.length; j++){
    if(curArray[j][0] === k){
       curArray.splice(j,1);
       //curArray[j] = null;
    }
  }

  this._size--;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
