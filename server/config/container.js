module.exports = function (container) {

    // services
    container.register('GoogleAuthService', require('../services/GoogleAuthService'));
    container.register('GoogleSheetService', require('../services/GoogleSheetService'), ['GoogleAuthService',
        'config/spreadsheetId']);

};