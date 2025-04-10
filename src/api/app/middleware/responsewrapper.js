const responseTemplateDto = require("../dto/responsetemplatedto");
const violationDto = require("../dto/violationdto");
const constants = require("../constant/constant");
const errService = require('../service/errorservice');
const applicationError = require('../dto/applicationerror');

module.exports = function(req, res, next) {
	res.sendError = function(err, languageCode = constants.DEFAULT_LANGUAGEID) {
		let violations = [];
		let statusCode = constants.ERROR_CONFIGURATION.DEFAULT_STATUS_CODE;

		let message = (err != null && err.hasOwnProperty("message") ? err.message : null);
		if(err instanceof applicationError){
			const errorConfig = errService.getErrorConfiguration(err.errorType,err.errorCode, languageCode);
			message = errService.getMessage(err.errorCode, err.errorType, languageCode);

			if(errorConfig){
				statusCode= errorConfig.statusCode;
				violations.push(new violationDto(
					err.errorCode,
					errorConfig.errorMessage
				));
			}
			else if(message){
				violations.push(new violationDto(
					err.errorCode,
					message
				));
			}	
		} 
		
		if(violations.length == 0){
			violations.push(new violationDto(
			constants.ERROR_CODE.GENERIC_ERROR,
			errService.getMessage(
				constants.ERROR_CODE.GENERIC_ERROR, 
				constants.ERROR_TYPE.API, languageCode)
			));
		}
		
		res.status(statusCode).send(new responseTemplateDto(null, violations));
	}

	res.sendOk = function(data) {
		res.send(new responseTemplateDto(data));
	}
	
    next()
}