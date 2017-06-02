module.exports = (app) => {
    let GoogleSheetService = app.container.get("GoogleSheetService");
    let FormValidationService = app.container.get("FormValidationService");

    let form = require('express-form'),
        field = form.field;

    let GoogleSheetForm = form(
        field("first").trim().isAlphanumeric().required(),
        field("last").trim().isAlphanumeric(),
        field("email").trim().isEmail().required(),
        field("message").trim().required()
    );

    app.use('/', GoogleSheetForm, FormValidationService.isValid);

    app.post('/registration', (req, res) => {
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