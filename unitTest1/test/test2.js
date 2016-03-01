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
        queue.push(item);
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
            item = queue.remove();

            // Assert
            assert.strictEqual(item, expectedItem);

    });

    it('have many items, when remove, remove the first item', function() {
        //Arrange
        var queue = new Queue();
        queue.push(1);
        queue.push(2);
        queue.push(3);
        var itemExpected = queue.collection[0];
        var itemRemove;
        //Act
        itemRemove = queue.remove();

        //Assert
        assert.equal(itemRemove, itemExpected);
    });

    it('add a item, remove item, have length 0', function() {
        //Arrange
        var queue = new Queue();
        var item = "item";
        var lengthExpeted = 0;
        var length;
        //Act
        queue.push(item);
        queue.remove();
        length = queue.length();
        //Assert
        assert.equal(length, lengthExpeted);
    });

    it('have many items, when clear, have 0 items', function() {
        //Arrange
        var queue = new Queue();
        queue.push(1);
        queue.push(2);
        queue.push(3);
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
        queue.push(1);
        queue.push(2);
        queue.push(3);
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
        queue.push(1);
        var lengthExpeted = 1;
        var lengthReturn;
        //Act
        lengthReturn = queue.length();
        //Assert
        assert.strictEqual(lengthExpeted, lengthReturn);

    });

    it('have x number of items, if use remove, when call length, return x-1 ', function() {
        var queue = new Queue();
        queue.push(1);
        queue.push(2);
        queue.push(3);
        var lengthExpeted = 2;
        var lengthReturn;
        //Act
        queue.remove();
        lengthReturn = queue.length();
        //Assert
        assert.strictEqual(lengthExpeted, lengthReturn);

    });

});

