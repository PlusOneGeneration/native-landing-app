module.exports = function (container) {

    // services
    container.register('GoogleAuthService', require('../services/GoogleAuthService'));
    container.register('GoogleSheetService', require('../services/GoogleSheetService'), ['GoogleAuthService',
        'config/spreadsheetId']);
    container.register('FormValidationService', require('../services/FormValidationService'), []);

};