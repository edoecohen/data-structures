var Stack = function(value) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.index = 0;
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  push:function(item){
    this.storage[this.index] = item;
    this.index++;
  },
  pop:function(){
    if(this.index>0){
      var result = this.storage[this.index - 1];
      delete this.storage[this.index - 1];
      this.index--;
      return result;
    }
  },
  size:function(){
    return this.index;
  }
};


