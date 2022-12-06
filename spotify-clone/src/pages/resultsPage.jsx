import React from "react";

const ResultsPage = ({resArray}) => {
	const artist = resArray[0]['path'];
	
	return (<h1>Got Here {artist}</h1>);
};

export default ResultsPage;