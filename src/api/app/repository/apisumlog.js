const { Op, literal, col } = require("sequelize");
const db = require("../model")
class ApiSumLogRepositry {
    async get() {
        const result = await db.ApiSumLogHistory.findAll({
            order: [["CreatedDate", "DESC"]],
        });
        return result;
    }
    
    async create(data, transaction=null) {
        let t = transaction || await db.sequelize.transaction();

        try {
            const updated = await db.SumApiLogHistory.create(
                { ApiInput: data.input, ApiResponse: data.response },
                {
                    transaction: t,
                }
            );
            if (!transaction) await t.commit();
            return updated;
        } catch (err) {
            if (!transaction) await t.rollback();
            throw err;
        }
    }
}

module.exports = new ApiSumLogRepositry(); 