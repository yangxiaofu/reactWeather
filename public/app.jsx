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

		var name = this.refs.name.value;

		if (name.length > 0){
			this.refs.name.value = '';
			this.props.onNewName(name);
		}
	},
	render: function(){
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="name"/>
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
	handleNewName: function(name) {
		this.setState({
			name: name
		});
	},
	// Renders the HTML in jsx
	render: function() {
		var name = this.state.name; //Updateable by the user.
		var message = this.props.message; //Props can not be updated by ther user.

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