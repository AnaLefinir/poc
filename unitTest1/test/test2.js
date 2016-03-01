/**
 * Created by Anita on 29/02/2016.
 */
var assert = require('assert');
var Queue = require('../app/queue.js');

describe('Queue', function(){
    it('should have 1 item after pushing 1 item', function() {
        // Arrange
        var item = {};
        var queue = new Queue();
        var length;
        var expectedLength = 1;

        // Act
        queue.enqueue(item);
        length = queue.length();

        // Assert
        assert.strictEqual(length, expectedLength);
    });

    it('should have 0 items when initialized', function() {
        // Arrange
        var expectedItemCount = 0;
        var itemCount;
        var queue;

        // Act
        queue = new Queue();
        itemCount = queue.length();

        // Assert
        assert.strictEqual(itemCount, expectedItemCount);
    });

    it('should return null when Queue is empty', function() {
            // Arrange
            var queue = new Queue();
            var item;
            var expectedItem = null;

            // Act
            item = queue.dequeue();

            // Assert
            assert.strictEqual(item, expectedItem);

    });

    it('have many items, when remove, remove the first item', function() {
        //Arrange
        var queue = new Queue();
        var item = {};
        var itemExpected = item;
        var itemRemove;
        //Act
        queue.enqueue(itemExpected);
        queue.enqueue(2);
        queue.enqueue(3);
        itemRemove = queue.dequeue();

        //Assert
        assert.equal(item, itemRemove);
    });

    it('add a item, remove item, have length 0', function() {
        //Arrange
        var queue = new Queue();
        var item = "item";
        var lengthExpeted = 0;
        var length;
        //Act
        queue.enqueue(item);
        queue.dequeue();
        length = queue.length();
        //Assert
        assert.equal(length, lengthExpeted);
    });

    it('have many items, when clear, have 0 items', function() {
        //Arrange
        var queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        var lengthExpeted = 0;
        var length;
        //Act
        queue.clear();
        length = queue.length();

        //Assert
        assert.equal(length, lengthExpeted);
    });

    it('have x number of items, when use length, return x', function() {
        //Arrange
        var queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        var lengthExpeted = 3;
        var lengthReturn;
        //Act
        lengthReturn = queue.length();
        //Assert
        assert.strictEqual(lengthExpeted, lengthReturn);

    });

    it('have 1 items, when use length, return 1', function() {
        //Arrange
        var queue = new Queue();
        queue.enqueue(1);
        var lengthExpeted = 1;
        var lengthReturn;
        //Act
        lengthReturn = queue.length();
        //Assert
        assert.strictEqual(lengthExpeted, lengthReturn);

    });

    it('have x number of items, if use remove, when call length, return x-1 ', function() {
        var queue = new Queue();
        var lengthExpeted = 2;
        var lengthReturn;
        //Act
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.dequeue();
        lengthReturn = queue.length();
        //Assert
        assert.strictEqual(lengthExpeted, lengthReturn);

    });

});

