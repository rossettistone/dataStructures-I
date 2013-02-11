// Note: don't use javascript's native array functions to do this.
var makeStack = function(){
  var stack = {
    add: function(thing){
    	this.memory[this.length] = thing;
    	this.length += 1; 
    },
    remove: function() {
    	var thing = this.memory[this.length];
    	this.memory[this.length] = undefined;
    	this.length -= 1;
    	return thing; 
    },
    length: 0,
    memory: []    
	}  
  return stack;
}