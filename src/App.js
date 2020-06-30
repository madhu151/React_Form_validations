import React, { Component } from 'react';
import Form from './components/Form'


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formData: {
				name: '',
				emailId: '',
				number: '',
				blobUrl: ''
			},
			errors: {
				name: '',
				emailId: '',
				number: '',
				blobUrl: ''
			}
		}
	}
	formValueChange = (e) => {
		let formData = this.state.formData;
		formData[e.target.name] = e.target.value;
		this.setState({ formData });
		this.setState({
			errors: {
				name: '',
				emailId: '',
				number: '',
				blobUrl: ''
			}
		})
	}
	validations = () => {
		let fields = this.state.formData;
		let isFormValid = true;
		let errors = this.state.errors;
		if (!fields['name']) {
			isFormValid = false;
			errors['name'] = 'Enter valid name'
		}
		//regular expression for email validation
		const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		if (!pattern.test(fields["emailId"])) {
			isFormValid = false;
			errors["emailId"] = "Please enter valid Email-ID.";
		}
		if (!fields['number']) {
			isFormValid = false;
			errors['number'] = 'Enter valid number'
		}
		const res = fields['blobUrl'].match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
		if (!res) {
			isFormValid = false;
			errors['blobUrl'] = 'Enter valid blobUrl'
		}
		this.setState({ errors: errors });
		return isFormValid;
	}
	validateFormData = (e) => {
		e.preventDefault();
		if (this.validations()) {
			console.log(this.state.formData, this.state.errors)
			console.log('valid.........')
		} else {
			console.log(this.state.formData, this.state.errors)
			console.log(' Invalid.........')
		}

	}
	render() {
		return (
			<div>
				<Form updateFormdata={this.state.formData}
					showErrorMsg={this.showErrorMsg}
					errors={this.state.errors}
					formValueChange={this.formValueChange}
					validateFormData={this.validateFormData}></Form>
			</div>);
	}
}

export default App;

