module.exports = class errorDto {
    constructor(code = null, message = null) {
        this.code = code;    
        this.message = message;
    }
}