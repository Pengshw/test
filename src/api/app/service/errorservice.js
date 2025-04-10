const constants = require('../constant/constant');

class errorService {
    constructor() {
    }

    getErrorConfiguration(errorType, errorCode, languageCode){
        let message = null;

        try {
            try {
                message = constants.ERROR_CONFIGURATION[errorType][errorCode];
            } catch (ex) {
                message = constants.ERROR_CONFIGURATION[constants.ERROR_TYPE.API][errorCode];
            }
        }
        catch (ex) {
            message = constants.ERROR_CONFIGURATION[constants.ERROR_TYPE.API][constants.ERROR_CODE.GENERIC_ERROR];
        }

        return {
            statusCode: message.STATUS_CODE,
            errorMessage: message[languageCode]
        };
    }

    getMessage(errorCode, errorType, languageId = constants.DEFAULT_LANGUAGEID) {
        // Exception will be thrown if the ErrorCode + LanguageId combination is not found
        // Catch this exception and proceed to get the defaut error message
        var message
        try {
            try {
                message = constants.ERROR_CONFIGURATION[errorType][errorCode][languageId];
            } catch (ex) {
                message = constants.ERROR_CONFIGURATION[constants.ERROR_TYPE.API][errorCode][constants.DEFAULT_LANGUAGEID];
            }
        }
        catch (ex) {
            message = constants.ERROR_CONFIGURATION[constants.ERROR_TYPE.API][constants.ERROR_CODE.GENERIC_ERROR][languageId];
        }

        return message;
    }
}

module.exports = new errorService();