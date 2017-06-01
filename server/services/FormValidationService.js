module.exports = class FormValidationSevice {
    isValid(req, res, next) {
        if (!req.form.isValid) {
            return res.status(400).json(req.form.errors);
        }

        next();
    };
};
