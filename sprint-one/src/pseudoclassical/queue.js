var Queue = function() {
  this.start = 0;
  this.end = 0;
  this.storage = {};
};





  Queue.prototype.enqueue = function(item) {
    this.storage[this.end] = item;
    this.end++;
  }

  Queue.prototype.dequeue = function() {
    if(this.end - this.start > 0){
      this.start++;
      return this.storage[this.start-1];
    }
  }

  Queue.prototype.size = function() {
    return this.end - this.start;
  }


