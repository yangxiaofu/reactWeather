var GreeterMessage = React.createClass({
	getDefaultProps: function(){
		return {
			message: "This is the default Message"
		}
	},
	render: function(){
		var name = this.props.name;
		var message = this.props.message;

		return (
			<div>
				<h1> Hello {name}!</h1>
				<p>{message}</p>
			</div>
		)
	}
});




var GreeterForm = React.createClass({
	onFormSubmit: function(e){
		e.preventDefault();

		var updates = {
			name: this.refs.name.value,
			message: this.refs.message.value
		}

		if (updates.name.length > 0){
			this.refs.name.value = '';
			this.refs.message.value = '';
			this.props.onNewName(updates);
		}
	},
	render: function(){
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="name" placeholder="Name"/><br />
				<textarea type="text" ref="message" placeholder="Message"/><br />
				<button type="submit">Submit</button>
			</form>
		)
	}
})


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

var firstName = 'Dave';
var message = 'This is a message';

ReactDOM.render( 
	<Greeter name = {firstName} message = {message}/>,
	document.getElementById('app')
);