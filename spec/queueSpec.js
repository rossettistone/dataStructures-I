describe("queue", function() {
  var queue;

  beforeEach(function() {
    queue = makeQueue();
  });

  it("should have a method named 'add'", function() {
    expect(queue.add).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'remove'", function() {
  	expect(queue.remove).toEqual(jasmine.any(Function));
  });

  it("should have property called length", function() {
  	expect(queue.length).toEqual(jasmine.any(Number));
  });

  it("should add one to end of queue", function() {
  	var beforeLength = queue.length;
  	queue.add(1);
  	var afterLength = queue.length;

  	expect(beforeLength === afterLength -1).toBeTruthy();
  });

  it("should remove one from front of queue", function() {
  	var beforeLength = queue.length;
  	queue.remove(1);
  	var afterLength = queue.length;

  	expect(beforeLength === afterLength + 1).toBeTruthy();
  })
});