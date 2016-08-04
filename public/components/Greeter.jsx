var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

var Greeter = React.createClass({
	// Gets the default props if the variable being passed does not exist.
	getDefaultProps: function() {
		return {
			name: "React",
			message: "There is no message here"
		}
	},
	//Needs to pass props into here in order to make it an updateable state.
	getInitialState: function() {
		return {
			name: this.props.name
		}
	},
	handleNewName: function(updates) {
		this.setState({
			name: updates.name,
			message: updates.message
		});
	},
	// Renders the HTML in jsx
	render: function() {
		var name = this.state.name; //Updateable by the user.
		var message = this.state.message; //Props can not be updated by ther user.

		return ( 
			<div>
				<GreeterMessage name={name} message={message}/>
				<GreeterForm onNewName={this.handleNewName}/>
			</div>
		);
	}
});

module.exports = Greeter;