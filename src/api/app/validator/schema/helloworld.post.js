const constant = require('../../constant/constant');

module.exports = {
    a: {
        in: ["body"],
        notEmpty: {
            bail: true,
            errorMessage: constant.ERROR_CODE.GENERIC_ERROR
        },
        isInt: {
            bail: true,
            errorMessage: constant.ERROR_CODE.GENERIC_ERROR
        }
    },
    b: {
        in: ["body"],
        notEmpty: {
            bail: true,
            errorMessage: constant.ERROR_CODE.GENERIC_ERROR
        },
        isInt: {
            bail: true,
            errorMessage: constant.ERROR_CODE.GENERIC_ERROR
        }
    },
};