/**
 * Created by Anita on 04/03/2016.
 */
var express = require('express'),
    fs = require('fs');
    app = express(),

app.get('/puchun/:type', function(req, res){
    var message;
    var type;
    var some;

    some = req.params.some;
    type = req.params.type;

    if(type === 'hermosa'){
        message = 'miau'
    }else if(type === 'gorda'){
        message = 'hiss!'
    }

    fs.readFile('./puchunresponse.json',function(err, data){
        var result = JSON.parse(data);
        result.message = message;
        result.some = some;
        result = JSON.stringify(data);

        res.write(result);
        res.end();
    });

});


