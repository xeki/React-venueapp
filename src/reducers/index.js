import { combineReducers } from 'redux';
import venues from './reducer-all-venues';
import selectedVenue from './reducer-selected-venue';


export default combineReducers({venues,venue:selectedVenue});