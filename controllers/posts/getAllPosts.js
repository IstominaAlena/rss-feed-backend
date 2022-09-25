const { Post } = require("../../models/post");
const test = "How to Streamline";

const getAllPosts = async (req, res) => {
	const { page = 1, limit = 10, title = "" } = req.query;
	const skip = (page - 1) * limit;

	const result = await Post.find(
		{
			title: {
				"$regex": title,
				"$options": "i"
			}
		},
		"-createdAt -updatedAt",
		{
			skip,
			limit: +limit,
			sort: {
				isoDate: -1
			}
		});

	const postsAmount = await Post.count();

	res.status(200).json({ posts: result, postsAmount });
};

module.exports = getAllPosts;
