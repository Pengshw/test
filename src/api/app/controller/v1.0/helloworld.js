const helloWorldService = require("../../service/helloworld");
const validate = require("../../validator/validator");
const { checkSchema } = require("express-validator");
const helloWorldSchema = require("../../validator/schema/helloworld.post");

class HelloWorldController {
    async init(router) {
        router.route("/").get(async (req, res, next) => {
            try {
                res.sendOk("Hello World");
            } catch (ex) {
                res.sendError(ex, req.headers.langaugecode);
            }
        });

        router
            .route("/sum")
            .post(validate(checkSchema(helloWorldSchema)), async (req, res, next) => {
                try {
                    res.sendOk(await helloWorldService.sum(req.body.a, req.body.b));
                } catch (ex) {
                    res.sendError(ex, req.headers.langaugecode);
                }
            });
    }
}

module.exports = HelloWorldController;
