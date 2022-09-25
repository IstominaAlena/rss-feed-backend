const { Schema, model } = require("mongoose");
const Joi = require("joi");

const postSchema = Schema({
	creator: {
		type: String,
		required: [ true, "Request body should contain \"creator\" field." ]
	},
	title: {
		type: String,
		required: [ true, "Request body should contain \"title\" field." ]
	},
	link: {
		type: String,
		required: [ true, "Request body should contain \"link\" field." ]
	},
	isoDate: {
		type: String,
		required: [ true, "Request body should contain \"isoDate\" field." ]
	},
	contentSnippet: {
		type: String,
		required: [ true, "Request body should contain \"contentSnippet\" field." ]
	},
	content: {
		type: String,
		required: [ true, "Request body should contain \"content\" field." ]
	},
	guid: {
		type: String,
		required: [ true, "Request body should contain \"guid\" field." ],
		unique: [ true, "The \"guid\" field should be unique." ],
	},
	categories: {
		type: [ String ],
		default: []
	}
}, { versionKey: false, timestamps: true });

const Post = model("post", postSchema);

const JoiAddPostSchema = Joi.object({
	creator: Joi.string().required(),
	title: Joi.string().required(),
	link: Joi.string().required(),
	content: Joi.string().required(),
	contentSnippet: Joi.string().required(),
	categories: Joi.array().items(Joi.string())
});

const JoiUpdatePostSchema = Joi.object({
	creator: Joi.string(),
	title: Joi.string(),
	link: Joi.string(),
	content: Joi.string(),
	contentSnippet: Joi.string(),
	categories: Joi.array().items(Joi.string())
});

module.exports = {
	Post,
	schemas: {
		addPost: JoiAddPostSchema,
		updatePost: JoiUpdatePostSchema
	}
};
