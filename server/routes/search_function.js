const router = require("express").Router();
const Songs = require("../models/songs.js");


router.get("/search/:artistSong", async (req, res) => {
	let artist_name = req.params.artistSong;
	let the, temp;
	Songs.find({title: {$regex:artist_name,$options:"i"}}, (error, data) => {
		if (error){
			console.log(error);
		}else{
			console.log(data);

			temp = data;
			Songs.find({artist: {$regex:artist_name,$options:"i"}}, (error, data2) =>{
				if (error){
					console.log(error);
					res.send(temp);
				}
				else{
					console.log(data2);
					temp += data2;
					res.send(temp);
				}
			});
		}
	});
			the = data;
			res.send( the );

		}
	});

	

});

module.exports = router;