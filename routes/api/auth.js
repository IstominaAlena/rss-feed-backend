const express = require("express");

const { ctrlWrapper, auth, validation } = require("../../middlewares");
const {
	signUpUser,
	signInUser,
	getCurrentUser,
	logOutUser
} = require("../../controllers/users");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/signup", validation(schemas.signUpUser), ctrlWrapper(signUpUser));

router.post("/signin", validation(schemas.signInUser), ctrlWrapper(signInUser));

router.get("/current", auth, ctrlWrapper(getCurrentUser));

router.get("/logout", auth, ctrlWrapper(logOutUser));

module.exports = router;
