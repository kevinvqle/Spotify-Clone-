const router = require("express").Router();
const Songs = require("../models/songs.js");


router.get("/search/:artistOrSong", async (req, res) => {
	let artist_name = req.params.artistOrSong;
	let the;
	Songs.find({artist: artist_name}, (error, data) => {
		if (error){
			console.log(error);
		}else{
			console.log(data);
			the = data;
			res.send( the );

		}
	});

	

});

module.exports = router;