import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

class Users extends Component {

	render(){
		return(
			<div>
				User page
			</div>
		);
	}
}

export default UsersContainer = createContainer(() => {

	//Do the AuthOps here

	//if the LoggedInUser is not in the "User" role
	if(!Roles.userIsInRole(Meteor.userId(), 'user')){
		//redirect to the homepage
		FlowRouter.go('/');
	} else {
		//Allow access to the page via a show method
	}

  	return {};

}, Users);