const { uuid } = require('uuidv4');

const { Post } = require("../../models/post");

const addPost = async (req, res) => {
	const data = { isoDate: new Date().toISOString(), guid: uuid(), ...req.body };
	const result = await Post.create(data);
	res.status(201).json(result);
};

module.exports = addPost;
