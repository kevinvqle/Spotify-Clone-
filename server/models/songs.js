const mongoose = require("mongoose");


const songSchema = new mongoose.Schema({
	artist: { type: String, required: true },
	title: { type: String, required: true },
	path: { type: String, required: true },
	artURL: { type: String, required: true }
});

const Songs = mongoose.model("songs", songSchema);

module.exports = Songs ;
