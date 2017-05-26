module.exports = (app) => {
    let GoogleSheetService = app.container.get("GoogleSheetService");

    app.post('/registration', function (req, res) {
        GoogleSheetService
            .addData(req.body)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                console.log(err);
                res.json(result);
            });
    });

};