var Stack = function() {
 var obj = Object.create(stackMethods);
 obj.index = 0;
 obj.storage = {};
 return obj;
};
var stackMethods = {
  size : function(){
    return this.index;
  },
  push: function(item){
    this.storage[this.index] = item;
    this.index++;
  },
  pop:function(){
    if(this.index>0){
      var results = this.storage[this.index -1];
      this.index--;
      return results;
    }
  }
};
