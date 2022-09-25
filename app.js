const express = require("express");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config();

const { errorString } = require("./constants/notifications");
const authRouter = require("./routes/api/auth");
const postsRouter = require("./routes/api/posts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRouter);

app.use("/api/posts", postsRouter);

app.use((_, res) => {
	res.status(404).json({ message: errorString.NOT_FOUND });
});

app.use((err, _, res) => {
	const { status = 500, message = errorString.SERVER_ERROR } = err;
	res.status(status).json({ message });
});

module.exports = app;
