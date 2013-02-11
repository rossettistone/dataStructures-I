// Note: don't use javascript's native array functions to do this.
var makeQueue = function(){
  var queue = {
    add: function(thing) {
    	this.memory[this.length] = thing;
    	this.length += 1;
    },
    remove: function() {
    	var removeLater = this.memory[0];
    	for (var i = 0; i < this.length; i++) {
    		this.memory[i] = this.memory[i + 1];
    	}
    	this.length -= 1;
    	return removeLater;
    },

    length: 0,

    memory: []
  };
  return queue;
}




var array = ['a','b', 'c']
array[0] = array[1]
// goal: array == ['b', 'c']
