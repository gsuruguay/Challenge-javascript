import React from 'react';
//import "./RegisterForm.css";

class RegisterForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.peticionPost}>
                <input type="text" name="concept" placeholder="Concept" onChange={this.props.handleSubmit} value={this.props.valueForm.concept}/>
                <input type="text" name="amount" placeholder="Amount" onChange={this.props.handleSubmit} value={this.props.valueForm.amount}/>
                <input type="date" name="date" onChange={this.props.handleSubmit} value={this.props.valueForm.date}/>
                <input type="text" name="type" placeholder="Type" onChange={this.props.handleSubmit} value={this.props.valueForm.type}/>
                <input type="submit" />
            </form>
        )
    }
}

export default RegisterForm;