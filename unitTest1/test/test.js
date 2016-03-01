var assert = require('assert');
var Stack = require('../app/stack.js');


describe('Stack', function() {
   it('should have 1 item after pushing 1 item', function() {
       // Arrange
       var item = {};
       var stack = new Stack();
       var length;
       var expectedLength = 1;
       
       // Act
       stack.push(item);
       length = stack.length();
       
       // Assert
       assert.strictEqual(length, expectedLength);
   });
   
   it('should have 0 items when initialized', function() {
        // Arrange
        var expectedItemCount = 0;
        var itemCount;
        var stack;
        
        // Act
        stack = new Stack();
        itemCount = stack.length();
        
        // Assert
        assert.strictEqual(itemCount, expectedItemCount);
    });
    
    it('should return same item when adding item', function() {
        // Arrange
        
        // Act
        
        // Assert
    });
    
    describe('pop', function(){
        it('should return null when Stack is empty', function() {
            // Arrange
            var stack = new Stack();
            var item;
            var expectedItem = null;
            
            // Act
            item = stack.pop();
            
            // Assert
            assert.strictEqual(item, expectedItem);
        });
    });
    
});