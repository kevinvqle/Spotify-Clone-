import os 
from pymongo import MongoClient
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

# change this to the base directory
baseDir = './Music'

baseDirStr = baseDir + '/'
host = 'localhost'
port = 27017

spotify = spotipy.Spotify(auth_manager=SpotifyClientCredentials())

# create a list of files
listOfFiles =  os.listdir(baseDir)
# connect to the db
client = MongoClient(host, port)
# create a database
myDataBase = client['music']
myCollection = myDataBase['songs']
# loop through each file and parse the artist and songname from the filenames
for thing in listOfFiles:
	# each mp3 filename is here.
	fullPathToSong = baseDirStr + thing
	songArtist = thing.split(")-")
	Title = songArtist[1]
	
	# here we are gonna do a bit of work to grab the url for the art.
	results = spotify.search(q='artist:' + songArtist[0], type='artist')
	items = results['artists']['items']
	if len(items) > 0:
		artist = items[0]
		print(songArtist[0])
		print(artist['images'][0]['url'])
	
		artURL = artist['images'][0]['url']

		song = {
		'artist': songArtist[0],
		'title': Title,
		'path': fullPathToSong,
		'artURL': artURL }
	else:
		song = {
		'artist': songArtist[0],
		'title': Title,
		'path': fullPathToSong }
	# this is what is actually created in the database
	
	# uncomment for acual usage
	myCollection.insert_one(song)
	