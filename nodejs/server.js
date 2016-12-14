var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var PORT = 8888;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log('Server listening on ' + PORT);
});

app.post('/isValid', function(req, res) {
    if (/^[a-z0-9]+$/i.test(req.body.input_val)) {
      res.send('valid');
    } else {
      res.send('invalid');
    }
});