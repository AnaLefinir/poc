function Stack() {
    //var self = this;
    var collection = [];
    
    function pushin(item) {
        collection.push(item);
        console.log('pushed!');
        return item;
    }
    
    function pop() {
        if (collection.length === 0) {
            return null;
        } else {
            var popedItem = collection.pop();
            console.log('poped!');
            return popedItem;
        }
    }
    
    function clear() {
        collection.splice(0,collection.length);
        console.log('cleared!');
    }

    function length() {
        return collection.length;
    }
    
    return {
        "push": pushin,
        "pop": pop,
        "clear": clear,
        "length": length,
        'collection' : collection
    };
}

module.exports = Stack;

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.collection);
stack.pop();
console.log(stack.collection);
console.log(stack.collection.length);
stack.clear();
console.log(stack.collection);
console.log(stack.collection.length);