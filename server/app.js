let express = require('express');
let bodyParser = require('body-parser');
let google = require('googleapis');

let sheets = google.sheets('v4');
let GoogleAuthService = require("./GoogleAuthService");


let spreadsheetId = '1IfWAyHEOz9M0dJn4G1NqshQAvy6RFT8ydlHwJRAu5TA';
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/registration', function (req, res) {
    GoogleAuthService.authenticate().then((auth) => {
        addDataToSheet(auth, req.body);
    });
});

function getData(auth) {
    sheets.spreadsheets.values.get({
        auth: auth,
        spreadsheetId: spreadsheetId,
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

function addDataToSheet(auth, data) {
    sheets.spreadsheets.values.append({
        auth: auth,
        spreadsheetId: spreadsheetId,
        range: 'Sheet1!A1:D', //Change Sheet1 if your worksheet's name is something else
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [[data.first, data.last, data.email, data.message]]
        }
    }, (err, response) => {
        if (err) {
            console.log('The API returned an error: ' + err);
        } else {
            console.log("Appended");
        }
    });
}
app.listen(3000, function () {
    console.log('Server was started');
});