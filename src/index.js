import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers/index';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const storeWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);
class Application extends Component{
	render(){
		return <Provider store={storeWithMiddleWare(reducers)}>
				<App />
			</Provider>;
			
			  
	}
} 
ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
