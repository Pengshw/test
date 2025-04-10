class responseDto{
    constructor(success = false, isTimedOut = false, data = null, error = null){
        this.success = success;
        this.isTimedOut = isTimedOut;
        this.data = data;
        this.error = error;
    }
}

module.exports = responseDto;