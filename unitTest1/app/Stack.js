function Stack() {
    //var self = this;
    var collection = [];
    
    function pushin(item) {
        collection.push(item);
        console.log('pushed!');
    };
    
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
        collection = [];
        console.log('cleared!');
    }
    
    function length() {
        return collection.length;
    }
    
    return {
        "push": pushin,
        "pop": pop,
        "clear": clear,
        "length": length
    };
}

module.exports = Stack;