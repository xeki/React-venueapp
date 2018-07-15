import { SELECT_VENUE } from '../actions/select-venue';

export default function(state=null,action){
	switch(action.type){
		case SELECT_VENUE:
			return action.payload.data;
		default:
			return state;
							
	}
}