function Stack() {
    //var self = this;
    var collection = [];
    
    function pushin(item) {
        collection.push(item);
        return item;
    }
    
    function pop() {
        if (collection.length === 0) {
            return null;
        } else {
            var popedItem = collection.pop();
            return popedItem;
        }
    }
    
    function clear() {
        collection.splice(0,collection.length);
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
