const createError = require("http-errors");

const { Post } = require("../../models/post");
const { errorString } = require("../../constants/notifications");

const updatePost = async (req, res) => {
	const { id } = req.params;
	const result = await Post.findByIdAndUpdate(id, req.body, { new: true });

	if (!result) {
		throw createError(400, errorString.MISSING_FIELDS);
	};

	res.status(200).json(result);
};

module.exports = updatePost;
