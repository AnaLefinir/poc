/**
 * Created by Anita on 29/02/2016.
 */
function Queue() {
    //var self = this;
    var collection = [];

    function pushin(item) {
        collection.push(item);
        console.log('pushed!');
    }

    /* function shift() {
        if (collection.length === 0) {
            return null;
        }else{
             var shiftedItem = collection.shift();
             console.log('shifted!');
             return shiftedItem;
     }
    }
    */

    function remove (){
        if (collection.length === 0){
            return null;
        }else{
            var take = collection.splice(0, 1);
            console.log("remove first item!");
            return take;
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
        "remove": remove,
        "clear": clear,
        "length": length,
        'collection' : collection
    };
}

module.exports = Queue;
