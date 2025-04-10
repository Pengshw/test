'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const nconf = require('nconf');
require('dotenv').config();
const constant = require('./app/constant/constant');


nconf.use('memory');
nconf.argv().env().file({ file: './app/config/' + nconf.get('NODE_ENV') + '.json' });
console.log("NODE ENV: ", nconf.get("NODE_ENV"));


const port = process.env.PORT || constant.DEFAULT_PORT;
const app = express();

async function init() {
    // helmet
    app.use(helmet());
    app.use(helmet.frameguard({ action: 'deny' }));
    app.use(helmet.noSniff());
    app.use(helmet.xssFilter());
    app.use(helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'"],
        },
    }));

    app.use(helmet.referrerPolicy({ policy: 'no-referrer-when-downgrade' }));
    app.use(helmet.crossOriginOpenerPolicy({ policy: 'same-origin' }));
    app.use(helmet.crossOriginResourcePolicy({ policy: 'same-site' }));

    // cors
    app.use(cors({ origin: "*", credentials: true }));
    app.disable('x-powered-by');
    app.use(function (req, res, next) {
        res.removeHeader("x-powered-by")
        res.removeHeader("X-Powered-By")
        next();
    });

    // json parser
    app.use(express.json({ limit: '10mb' }));
    app.use(bodyParser.json({ type: "application/json" }));

    // response wrapper
    app.use(require('./app/middleware/responsewrapper'));

    // routes
    require('./app/init/route')(app);
   

    app.get("/", (req, res) => {
        res.send("Hello World");
    });

    app.listen(port, () => {
        console.log('[API] initialized SUCCESSFULLY');
        console.log(`Server running on port ${port}`);
    });
   
}

init().catch((err) => {
    console.log(err);
    console.log('[API] initialized FAILED');
});