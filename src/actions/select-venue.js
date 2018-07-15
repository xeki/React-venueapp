import axios from 'axios';
const BASE_URL ="http://localhost:8085/detail?url=";
const SELECT_VENUE='SELECT_VENUE';

function selectedVenue(venue) {
	let url = BASE_URL+venue.href;
	const request = axios.get(url);
	return {type:SELECT_VENUE,payload:request};
}

export  {SELECT_VENUE,selectedVenue};