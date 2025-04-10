const moment = require('moment');

module.exports = function (data, violations){
	return {
		data : (!data ? null : data),
		success : (violations === undefined || violations === null || violations.length == 0 ? true : false),
		timeStamp : moment().unix(),
		violations : (!violations ? null : violations)
	}
}