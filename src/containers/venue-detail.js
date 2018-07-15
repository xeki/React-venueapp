import React, { Component } from 'react';
import { connect } from 'react-redux';

class VenueDetail extends Component{
	constructor(props ){
		super(props);
		this.renderVenueDetail = this.renderVenueDetail.bind(this);
	}
	renderVenueDetail(){
		if(this.props.venue){
			return <dl className="dl-horizontal">
					<dt>Name: </dt><dd> {this.props.venue.Nimi} </dd>
					<dt>Address: </dt><dd> {this.props.venue.Osoite } </dd>
					<dt>Description: </dt><dd> {this.props.venue.desc} </dd>
					<dt>Temperature: </dt><dd> {this.props.venue.Temp} </dd>
				</dl>;
		}else{
			return <b> No venue detail to display </b>;
		}
	}
	render(){
		return <div className="col-md-5 text-left">
				{this.renderVenueDetail()}
			</div>;
	}
}

function mapStateToProps(state){
	return {venue:state.venue};
}

export default connect(mapStateToProps)(VenueDetail);