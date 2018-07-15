import axios from 'axios';

const url =`http://localhost:8085/search?search_text=`;


const ALL_VENUES='ALL_VENUES';

 function getAllVenues(){
	const request = axios.get(url);
	return {type:ALL_VENUES,payload:request};
}

export {ALL_VENUES, getAllVenues};