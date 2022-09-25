const createError = require("http-errors");
const bcrypt = require("bcryptjs");

const { User } = require("../../models/user");
const { errorString } = require("../../constants/notifications");

const hashSalt = 10;

const signUpUser = async (req, res) => {
	const { email, password, name } = req.body;

	const user = await User.findOne({ email });

	if (user) {
		throw new createError(409, errorString.EMAIL_IN_USE);
	};

	const hashPassword = await bcrypt.hash(password, hashSalt);

	await User.create({ ...req.body, password: hashPassword });

	res.status(201).json("Succesful registration. Please, login to contine.");
};

module.exports = signUpUser;
