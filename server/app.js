let express = require('express');
let app = express();
require('./config/application').wrap(app);

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./api/google-sheet')(app);

let server_port = process.env.PORT || 3000;
let server_host = process.env.HOST || '0.0.0.0';

app.listen(server_port, server_host, function() {
    console.log('Server was started on port %d and on server %d', server_port, server_host);
});