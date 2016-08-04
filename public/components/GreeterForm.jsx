var React = require('react');

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

module.exports = GreeterForm;