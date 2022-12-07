import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState, useEffect} from 'react';
import { Card, Row } from 'react-bootstrap'
import axios from 'axios';


const SearchMusic = (props) => {
	const [results, setResults] = useState([])

	useEffect(() => {
	// here props.searchTerms is from the topbar nav
	var baseURL = 'https://badify.site:5000/search/';
	// this does the search
	axios.get(baseURL + props.searchTerms)
	.then(res => {
		// here data contains an array of results, maybe empty
		const data = res.data;
		setResults(data);
		console.log(data)
	})
	}, [props.searchTerms]);

	return (
		<div className='search__results'>
		<center>
		<Row className="mx-2 row  row-cols-4">
		{results.map((cardInfo) => {
							return (<Card width='18 rem'>
					<Card.Img src={cardInfo.artURL}/>
					<Card.Body classname="card__body">
					<Card.Text>{cardInfo.artist}</Card.Text>
					<Card.Title classname="card__title">{cardInfo.title.split(".mp3")}</Card.Title>
					<audio src={"https://badify.site:5000/music/" + cardInfo._id} controls/>
					</Card.Body>
					</Card>)
		})}

		</Row>
		</center>
		</div>
	)
};

export default SearchMusic;