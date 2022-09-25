const createError = require("http-errors");
const jwt = require("jsonwebtoken");

const { errorString } = require("../constants/notifications");
const { JWT_KEY } = process.env;
const { User } = require("../models/user");

const auth = async (req, _, next) => {
	try {
		const { authorization = "" } = req.headers;
		const [ bearer, token ] = authorization.split(' ');

		if (bearer !== "Bearer") {
			throw createError(401, errorString.INVALID_TOKEN);
		};

		const { id } = jwt.verify(token, JWT_KEY);

		const user = await User.findById(id);

		if (!user || !user.token) {
			throw createError(401, errorString.INVALID_TOKEN);
		};

		req.user = user;
		next();

	} catch (error) {
		if (!error.status) {
			error.status = 401;
			error.message = errorString.INVALID_TOKEN;
		};
		next(error);
	};
};

module.exports = auth;
