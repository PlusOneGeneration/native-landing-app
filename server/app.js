let express = require('express');
let bodyParser = require('body-parser');
let google = require('googleapis');
let GoogleAuthService = require("./GoogleAuthService");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/registration', function (req, res) {
    GoogleAuthService.authenticate().then((auth) => {
        getData(auth);
    });
});

function getData(auth) {
    let sheets = google.sheets('v4');
    sheets.spreadsheets.values.get({
        auth: auth,
        spreadsheetId: '1IfWAyHEOz9M0dJn4G1NqshQAvy6RFT8ydlHwJRAu5TA',
        range: 'Sheet1!A1', //Change Sheet1 if your worksheet's name is something else
    }, (err, response) => {
        if (err) {
            console.log('The API returned an error: ' + err);
            return;
        }

        let rows = response.values;

        console.log('response get data', response);

        if (!rows) {
            !console.log('ma!');
        }

        if (rows.length === 0) {
            console.log('No data found.');
        } else {
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                console.log(row.join(", "));
            }
        }
    });
}


app.listen(3000, function () {
    console.log('Server was started');
});