/**
 * Created by Anita on 04/03/2016.
 */
var express = require('express'),
    fs = require('fs'),
    app = express();

app.get('/puchun/:type', function (req, res) {
    var message;
    var type;
    var some;

    some = req.query.some;
    type = req.params.type;

    if (type === 'hermosa') {
        message = 'miau';
    } else if (type === 'gordo') {
        message = 'hiss!';
    } else {
        res.writeHead(404, {
            'X-STATUS': 'palurdo...',
            'Content-Type': 'text/xml'
        });
        res.write('<puchun>pero que palurdo</puchun>');
        res.end();
        return;
    }

    fs.readFile('./puchunresponse.json', function (err, data) {
        var object = JSON.parse(data);
        object.message = message;
        object.some = some;
        var serializedObject = JSON.stringify(object);

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(serializedObject);
        res.end();
    });

});
app.listen(8080);