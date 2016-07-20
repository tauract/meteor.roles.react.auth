# meteor.roles.react.auth
A Solution to using Meteor/Roles/React/Auth

There is little if any documentation on the web detailing how to combine the power of Meteor, React, Roles, and Auth.
After many attempts with less than savory methods I have come across by far the easiest way to provide Component-side Auth.

The files in the repo were part of a larger project that were ripped out for demonstrational purposes and do not have all the necessary components to compile to a web app.

Let's get started!

1. Add a service container to any component you want to provide a shell of Auth.
2. Set the 'export default' class attributes to the service container (This is not required but it allow you to import the files elsewhere without the {} syntax)
3. Within the Service Container, place your Authentication Logic.
  a. There is some sample logic in the included files but that logic is weak and only demonstrational
  b. Do your redirecting within your auth logic. (flow-router was in use in the larger project this is pulled from, so the redirect syntax is FlowRouter.go(route))
4. Make sure the Service Contianer grabs the component you are trying to authenticate for. It is the last argument in the container syntax in the example.
5. In the router file, import the service container.
6. Where your route happens to be, mount the service container. (Mount is currently the reccomended tactic as React-Layout is to be deprecated.)
7. Enjoy and Share. 
