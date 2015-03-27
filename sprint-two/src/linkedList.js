var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
  // TIME COMPLEXITY: O(1) - Time Constant
    if(list.tail === null){
      list.tail = Node(value);
      list.head = list.tail;
    }
    else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    // TIME COMPLEXITY: O(1) - Time Constant
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target){
    // TIME COMPLEXITY: O(n) - Time Constant
    var start = list.head;
    while(start){
      if(start.value === target){
        return true;
      }
      start = start.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
