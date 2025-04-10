const { validationResult } = require('express-validator');
const violationDto = require('../dto/violationdto');
const errorService = require('../service/errorservice');
const constant = require('../constant/constant');
const responseTemplateDto = require('../dto/responsetemplatedto');

module.exports = function validate(validations) {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));
  
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        let violations = [];
        for(const error of errors.errors){
            if(!violations.some(v => v.code == error.msg)){
                violations.push(new violationDto(
                    error.msg,
                    errorService.getMessage(error.msg, constant.ERROR_TYPE.API, req.headers.languagecode)
                ));
            }
        }

        res.status(400).send(new responseTemplateDto(null, violations));
    };
};