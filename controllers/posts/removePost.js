const createError = require("http-errors");

const { Post } = require("../../models/post");
const { errorString, infoString } = require("../../constants/notifications");

const removePost = async (req, res) => {
	const { id } = req.params;

	const result = await Post.findByIdAndDelete(id);

	if (!result) {
		throw createError(404, errorString.NOT_FOUND);
	};

	res.status(200).json({
		"message": infoString.POST_DELETED,
	});
};

module.exports = removePost;
