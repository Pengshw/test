const constant = require("../constant/constant");

class violationDto{
    constructor(code, message){
        this.code = constant.ERROR_CONFIGURATION.CODE_PREFIX + code
        this.message = message;
    }
}

module.exports = violationDto;