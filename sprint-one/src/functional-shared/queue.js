var Queue = function(){
  var obj = {};
  obj.storage = {};
  obj.start = 0;
  obj.end = 0;
  _.extend(obj, queueMethods);

  return obj;
};

var queueMethods = {

  enqueue: function(item) {
    this.storage[this.end] = item;
    this.end++;
  },

  dequeue: function() {
    if(this.end - this.start > 0){
      this.start++;
      return this.storage[this.start-1];
    }
  },

  size: function() {
    return this.end - this.start;
  }

};



