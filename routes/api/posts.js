const express = require("express");

const { ctrlWrapper, auth, validation } = require("../../middlewares");
const {
	getAllPosts,
	getPostById,
	addPost,
	removePost,
	updatePost
} = require("../../controllers/posts");
const { schemas } = require("../../models/post");

const router = express.Router();

router.get("/", ctrlWrapper(getAllPosts));

router.get("/:id", ctrlWrapper(getPostById));

router.post("/", validation(schemas.addPost), ctrlWrapper(addPost));

router.delete("/:id", auth, ctrlWrapper(removePost));

router.put("/:id", auth, validation(schemas.updatePost), ctrlWrapper(updatePost));

module.exports = router;
