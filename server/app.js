let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/registration', function (req, res) {
    console.log('reg.body', req.body.first);
    res.json({text: 'Hello World'});
});

app.listen(3000, function () {
    console.log('Server was started');
});