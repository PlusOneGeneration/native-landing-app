let express = require('express');
let app = express();
require('./config/application').wrap(app);

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./api/google-sheet')(app);

app.listen(3000, function () {
    console.log('Server was started');
});