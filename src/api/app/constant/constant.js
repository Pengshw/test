"use strict";
module.exports = {
    DATE_FORMAT: "DD/MM/YYYY",
    TIME_FORMAT: "HH:mm:ss",
    DATE_TIME_FORMAT: "DD/MM/YYYY HH:mm:ss",
    DEFAULT_LANGUAGEID: "en-US",
    DEFAULT_PORT: 3000,
    HTTP_METHOD: {
        GET: "GET",
        POST: "POST",
        PUT: "PUT",
        PATCH: "PATCH",
        DELETE: "DELETE",
    },
    HTTP_REQUEST: {
        TIMEOUT: "ECONNABORTED",
    },
    PAGINATION: {
        DEFAULT_PAGE_NO: 1,
        DEFAULT_PAGE_SIZE: 50,
        PAGE_SIZES: [-1, 10, 20, 30],
        MAX_PAGE_SIZE: 1000,
    },
    ERROR_TYPE: {
        API: "API",
    },
    ERROR_CODE: {
        GENERIC_ERROR: -999,
    },
    ERROR_CONFIGURATION: {
        DEFAULT_STATUS_CODE: 500,
        VALIDATION_STATUS_CODE: 400,
        API: {
            [-999]: {
                STATUS_CODE: 500,
                "en-US":
                    "Generic Error Message.",
            }
        },
    },
    CONFIG: {
        API: {
            TIMEOUT: "api:timeout"
        },
        DB: {
            DATABASE: "db:database",
            USERNAME: "db:username",
            PASSWORD: "db:password",
            OPTIONS: "db:options",
        }
    }
};
