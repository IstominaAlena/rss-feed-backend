const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegex = /^[^-]+([a-z0-9._-]{1,})+@[a-z0-9.-]+\.[a-z]{2,4}$/;

const userSchema = Schema({
	name: {
		type: String,
		required: [ true, "Request body should contain \"name\" field." ],
		minlength: [ 2, "The \"name\" field should contain at least 2 characters." ],
		maxlength: [ 15, "The \"name\" field shouldn't contain more than 15 characters." ]
	},
	email: {
		type: String,
		required: [ true, "Request body should contain \"email\" field." ],
		unique: [ true, "The \"email\" field should be unique." ],
		match: [ emailRegex, "Invalid email address." ],
	},
	password: {
		type: String,
		required: [ true, "Request body should contain \"password\" field." ],
	},
	token: {
		type: String,
		default: "",
	}
}, { versionKey: false, timestamps: true });

const User = model("user", userSchema);

const JoiSignUpUserSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().pattern(emailRegex).required(),
	password: Joi.string().required(),
});

const JoiSignInUserSchema = Joi.object({
	email: Joi.string().pattern(emailRegex).required(),
	password: Joi.string().required(),
});

module.exports = {
	User,
	schemas: {
		signUpUser: JoiSignUpUserSchema,
		signInUser: JoiSignInUserSchema
	}
};
