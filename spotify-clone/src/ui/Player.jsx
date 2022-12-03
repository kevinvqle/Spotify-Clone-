import React from "react";
import { useState, useEffect } from "react";
// import ReactAudioPlayer from 'react-audio-player'


// this keeps track of some state stuff
const useAudio = (url) => {

	const [audio] = useState(new Audio(url));
	const [playing, setPlaying] = useState(false);
	const toggle = () => setPlaying(!playing);
	useEffect(() => {
		playing ? audio.play() : audio.pause();
		},
		[playing, audio]
		);
	useEffect(() => {
		audio.addEventListener('ended', () => setPlaying(false));
		return () => {
		audio.removeEventListener('ended', () => setPlaying(false));
		};
		}, [audio]);
	return [playing, toggle];
	};

	// This is your entry point for the player, it needs the url for music.
	const Player = ({ url }) => {
		const [playing, toggle] = useAudio(url);
		return (
		  <div>
			<button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
		  </div>
		);
	  };
export default Player;