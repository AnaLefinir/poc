/**
 * Created by Anita on 29/02/2016.
 */
function Queue() {
    //var self = this;
    var collection = [];

    function pushin(item) {
        collection.push(item);
    }

    function remove (){
        if (collection.length === 0){
            return null;
        }else{
            var take = collection.shift();
            return take;

        }

    }

    function clear() {
        collection.splice(0,collection.length);
    }

    function length() {
        return collection.length;
    }

    return {
        "enqueue": pushin,
        "dequeue": remove,
        "clear": clear,
        "length": length
    };
}

module.exports = Queue;

var queue = new Queue();
queue.enqueue({});
queue.dequeue();