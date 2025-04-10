const ApiSumLogRepositry = require("../repository/apisumlog");

class HelloWorldService {
    /**
     *
     * @param {Int} a
     * @param {Int} b
     * @returns {Int}
     * @description This method adds two numbers and returns the result.
     */
    async sum(a, b) {
        const result = a + b;
        await ApiSumLogRepositry.create({
            input: { a, b },
            response: result,
        });
        return result;
    }
}

module.exports = new HelloWorldService();
