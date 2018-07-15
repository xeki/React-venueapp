import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {selectedVenue} from '../actions/select-venue';
import {getAllVenues} from '../actions/all-venues';

class VenueList extends Component{
	constructor(props){
		super(props);
		this.renderVenueList = this.renderVenueList.bind(this);
		this.fetchVenueList = this.fetchVenueList.bind(this);
	}
	renderVenueList(){
		if(this.props.venues.length){
			return this.props.venues.map(venue=><li key={venue.name}
							 onClick={()=>this.props.selectedVenue(venue)}
					className="list list-group-item text-left">{venue.name}</li>);
										
			
		}else{
			return <b> venue list NOT availabele  </b>;
		}
		
	}
	fetchVenueList(e){
		e.preventDefault();
		this.props.getAllVenues();
	}
	render(){
		return <div className="col-md-7">
			<div className="row">
				<div className="col-md-12">
					<form className="form-inline">
						<div className="form-group">
							<div className="input-group">
								<div className="input-group-addon">$</div>
									<input type="text" placholder="Amount" />
								<div className="input-group-addon">0.0</div>
							</div>
						</div>
					<button className="btn btn-success" onClick={this.fetchVenueList}> Load all venues </button>
					</form>
				</div>
			</div>
		<div className="row">
			<div className="col-md-12">
				<ul className="list list-group list-unstyled text-left">
					{this.renderVenueList()}
				</ul>
			</div>
		</div>
	</div>;
	}
	
}
function dispatchActionsToProps(dispatch){
	return bindActionCreators({selectedVenue,getAllVenues},dispatch);
}
function mapStateToProps(state){
		return {venues:state.venues};
	}

	export default connect(mapStateToProps,dispatchActionsToProps)(VenueList);