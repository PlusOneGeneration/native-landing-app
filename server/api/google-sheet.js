module.exports = (app) => {
    let GoogleSheetService = app.container.get("GoogleSheetService");
    let form = require('express-form'),
        field = form.field;

    let GoogleSheetForm = form(
        field("first").trim().isAlphanumeric().required(),
        field("last").trim().isAlphanumeric(),
        field("email").trim().isEmail().required(),
        field("message").trim().isAlphanumeric().required()
    );

    app.use('/', GoogleSheetForm);

    app.post('/registration', function (req, res) {
        if (!req.form.isValid) {
            return res.status(400).json(req.form.errors);
        }

        GoogleSheetService
            .addData(req.form)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                console.log(err);
                res.json(result);
            });
    });

};