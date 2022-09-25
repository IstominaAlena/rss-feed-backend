const createError = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../../models/user");
const { errorString } = require("../../constants/notifications");
const { JWT_KEY } = process.env;

const signInUser = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (!user) {
		throw new createError(401, errorString.UNAUTHORIZED);
	};

	const isPasswordCompared = await bcrypt.compare(password, user.password);

	if (!isPasswordCompared) {
		throw new createError(401, errorString.UNAUTHORIZED);
	};

	const payload = {
		id: user._id
	};

	const token = jwt.sign(payload, JWT_KEY, { expiresIn: "1h" });

	await User.findByIdAndUpdate(user._id, { token });

	res.status(200).json({
		token,
		user: {
			name: user.name,
			email: user.email,
		}
	});
};

module.exports = signInUser;
