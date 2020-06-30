import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Message from './Message'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
        };

    }
    render() {
        return (
            <div className="row">
                <h1 className="text-center">Form Validation</h1>
                <form>
                    <h5>Name:</h5>
                    <input type='text' name='name' placeholder='Enter Name' onChange={this.props.formValueChange}
                        value={this.props.updateFormdata['name']}
                    />
                     <Message message={this.props.errors['name']}></Message>
                    <h5>Email:</h5>
                    <input type='email' name='emailId' placeholder='Enter Email ID' onChange={this.props.formValueChange}
                        value={this.props.updateFormdata['emailId']}
                    />
                    <Message message={this.props.errors['emailId']}></Message>
                    <h5>Phone:</h5>
                    <input type='number' name='number' placeholder='Enter Mobile Number' onChange={this.props.formValueChange}
                        value={this.props.updateFormdata['number']} />
                        <Message message={this.props.errors['number']}></Message>
                    <h5>Blog URL:</h5>
                    <input type='url' name='blobUrl' placeholder='Enter Blob Url' onChange={this.props.formValueChange}
                        value={this.props.updateFormdata['blobUrl']} />
                        <Message message={this.props.errors['blobUrl']}></Message>
                    <div className="small-6 small-centered text-center columns">
                        <a href="#" className="button success expand round text-center" 
                        onClick={this.props.validateFormData}>Verify</a>
                    </div>
                </form>
            </div>);
    }
}

export default Form;
