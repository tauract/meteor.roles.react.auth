import React, { Component } from 'react';

//to make new users
import { Accounts } from 'meteor/accounts-base';

//to find elements from forms
import ReactDOM from 'react-dom';
import Wrapper from './accounts/Wrapper.jsx';
import { Meteor } from 'meteor/meteor';

export default class App extends Component {

	render(){
		return(
			<div id='container'>
				<h1>Home Page</h1>
			</div>
		);
	}


}