import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VenueList from './containers/venue-list';
import VenueDetail from './containers/venue-detail';

export default class App extends Component {
	/*componentDidMount(){
		console.log("Action: " , this.props);
		console.log("Imported action",getAllVenues);
		this.props.getAllVenues();
	}*/
	
  render() {
    return (
      <div className="App container">
			<header className="App-header">
			  <img src={logo} className="App-logo" alt="logo" />
			  <h1 className="App-title">Welcome to React</h1>
			</header>
			<p className="App-intro">
			  To get started, edit <code>src/App.js</code> and save to reload.
			</p>
			<div col-md-12>
					<VenueList />
					<VenueDetail />
			</div>
      </div>
    );
  }
}

