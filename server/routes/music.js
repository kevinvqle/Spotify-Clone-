const router = require("express").Router();
const Songs = require("../models/songs.js");

router.get("/music/:objId", async (req, res) => {
	let songID = req.params.objId;
	let songPath;
	Songs.findById( songID, (error, data) => {
		if (error){
			console.log(error);
			res.send("Oops something went wrong.")
		}else{
			console.log(data["path"]);
			res.download(data["path"]);
		}
	});
});

module.exports = router;