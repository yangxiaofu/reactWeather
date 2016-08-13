var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = 'John';
var message = 'This is a message';

ReactDOM.render( 
	<Greeter name = {firstName} message = {message}/>,
	document.getElementById('app')
);

