const { errorString } = require("../constants/notifications");

const ctrlWrapper = (ctrl) => {
	const func = async (req, res, next) => {
		try {
			await ctrl(req, res);
		} catch (error) {
			if (error.message.includes(errorString.VALIDATION_FAILED)) {
				error.status = 400;
			}
			if (error.message.includes(errorString.CAST_FAILED)) {
				error.status = 404;
			}
			next(error);
		}
	};
	return func;
};

module.exports = ctrlWrapper;
