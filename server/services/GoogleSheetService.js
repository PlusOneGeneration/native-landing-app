let spreadsheetId = '1IfWAyHEOz9M0dJn4G1NqshQAvy6RFT8ydlHwJRAu5TA';
let google = require('googleapis');
let sheets = google.sheets('v4');

module.exports = class GoogleSheetService {
    constructor(GoogleAuthService) {
        this.GoogleAuthService = GoogleAuthService;
    }

    addData(data) {
        return this.GoogleAuthService.authenticate()
            .then((auth) => {
                return this.sheetsAppend(auth, data);
            });
    };

    getData() {
        return this.GoogleAuthService.authenticate()
            .then((auth) => {
                return this.sheetsGetData(auth, data);
            });
    };

    sheetsAppend(auth, data) {
        return new Promise((resolve, reject) => {
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
                    reject(err);
                } else {
                    console.log('Append');
                    resolve(response);
                }
            });
        });
    };

    sheetsGetData(auth) {
        return new Promise((resolve, reject) => {
            sheets.spreadsheets.values.get({
                auth: auth,
                spreadsheetId: spreadsheetId,
                range: 'Sheet1!A1', //Change Sheet1 if your worksheet's name is something else
            }, (err, response) => {
                if (err) {
                    console.log('The API returned an error: ' + err);
                    return reject(err);
                }

                let rows = response.values;

                if (!rows || rows.length) {
                    return resolve();
                }

                for (let i = 0; i < rows.length; i++) {
                    let row = rows[i];
                    console.log(row.join(", "));
                }

                resolve();
            });
        });

    };

};