import React from 'react';
import {mount} from 'react-mounter';
import { Meteor } from 'meteor/meteor';

//import the classes that will be mounted
import App from '../resources/App.jsx';
import Users from '../resources/Users.jsx';


var publicRoutes = FlowRouter.group({
	name: 'public',
	//any triggers to the route goes here
});
		publicRoutes.route("/", {
		  action() {
		    mount(App);
		  }
		});


var userRoutes = FlowRouter.group({
	prefix: '/user',
	name: 'user',
});

		userRoutes.route("/", {
		  action() {
		    mount(User);
		  }
		});


		