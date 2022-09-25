const CronJob = require("cron").CronJob;
const Parser = require("rss-parser");

const { Post } = require("../models/post");
const { RSS_URL } = process.env;

const parser = new Parser();

const cronParser = new CronJob({
	cronTime: "0 * * * *",
	onTick: function () {
		(async () => {
			const rssFeed = await parser.parseURL(RSS_URL);
			const mongoFeed = await Post.find({}, "guid");

			rssFeed.items.forEach(async (item) => {
				const result = mongoFeed.find((feedItem) => feedItem.guid === item.guid);

				if (!result) {
					await Post.create(item);
				};
			});
		})();
	},
});

module.exports = cronParser;
