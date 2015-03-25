var Stack = function() {
  this.index = 0;
  this.storage = {};
};

Stack.prototype.push = function(item){
  this.storage[this.index] = item;
  this.index++;
}

Stack.prototype.pop = function(){
 if(this.index>0){
    var results = this.storage[this.index -1];
    this.index--;
    return results;
  }
}

Stack.prototype.size = function(){
  return this.index;
}
