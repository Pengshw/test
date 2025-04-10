'use strict';
const constant = require('../constant/constant');
const apiControllerPath = '../controller';
const changeCase = require('change-case');
const express = require('express');
const requireDir = require('require-dir')
const fs = require('fs');
const path = require('path');

const Routes = function(app){
    // Configure API controller paths
    fs.readdirSync(path.resolve(__dirname, apiControllerPath)).forEach(dir =>{
        let fullPath = path.join(apiControllerPath, dir);
        let routes = requireDir(fullPath);

        Object.keys(routes).forEach(function(routeName) {
            let router = express.Router();
            let DynamicController = require(path.join(fullPath , routeName));
            let controller = new DynamicController();
            
            controller.init(router);
            
            app.use('/api/' + dir + '/' + changeCase.paramCase(routeName), router);
            
          });
    });
}

module.exports = Routes;