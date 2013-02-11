describe("stack", function() {
  var stack;

  beforeEach(function() {
    stack = makeStack();
  });

  it("should have a method named 'add'", function() {
    expect(stack.add).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of stack
  it("should have a method named 'remove'", function() {
  	expect(stack.remove).toEqual(jasmine.any(Function));
  });

  it("should check have property named 'length'", function() {
  	expect(stack.length).toEqual(jasmine.any(Number));
  });

  it("should check if add incremented stack length", function() {
  	var beforeLength = stack.length;
  	stack.add();
  	var afterLength = stack.length;

  	expect(beforeLength === afterLength-1).toBeTruthy();
  });

  it("should check if remove decremented stack length", function() {
  	var beforeLength = stack.length;
  	stack.remove();
  	var afterLength = stack.length;
  	expect(beforeLength === afterLength+1).toBeTruthy();

  })

});