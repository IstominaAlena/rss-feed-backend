const errorString = {
	NOT_FOUND: "Not found",
	SERVER_ERROR: "Server error",
	VALIDATION_FAILED: "validation failed",
	CAST_FAILED: "Cast to ObjectId failed",
	MISSING_FIELDS: "Missing fields",
	EMAIL_IN_USE: "This email is already used",
	UNAUTHORIZED: "Email or password is wrong",
	INVALID_TOKEN: "Sorry, you don't have permission to do this operation"
};

const infoString = {
	SUCCESSFUL_CONNECTION: "Successful database connection",
	POST_DELETED: "Post is removed from news feed"
};

module.exports = {
	errorString,
	infoString
};
