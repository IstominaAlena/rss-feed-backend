const createError = require("http-errors");

const { Post } = require("../../models/post");
const { errorString } = require("../../constants/notifications");

const getPostById = async (req, res) => {
	const { id } = req.params;
	const result = await Post.findById(id);

	if (!result) {
		throw createError(404, errorString.NOT_FOUND);
	};

	res.status(200).json(result);
};

module.exports = getPostById;
