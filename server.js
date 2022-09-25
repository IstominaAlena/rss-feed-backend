const mongoose = require("mongoose");
require("dotenv").config();

const cronParser = require("./utils/cronParser");
const { DB_HOST, PORT = 4000 } = process.env;
const { infoString } = require("./constants/notifications");

const app = require("./app");

mongoose.connect(DB_HOST,)
	.then(() =>
		app.listen(PORT, () => {
			console.log(infoString.SUCCESSFUL_CONNECTION);
			cronParser.start();
		})
	)
	.catch((error) => {
		console.log(error.message);
		process.exit(1);
	});
