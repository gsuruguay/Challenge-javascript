import React from 'react';
//import "./RegisterForm.css";

class RegisterForm extends React.Component {

    render() {
        return (
            <form>
                <input type="text" name="concept" placeholder="Concept" onChange={this.props.handleSubmit} />
                <input type="text" name="amount" placeholder="Amount" onChange={this.props.handleSubmit} />
                <input type="date" name="date" onChange={this.props.handleSubmit} />
                <input type="text" name="type" placeholder="Type" onChange={this.props.handleSubmit} />
                <input type="submit" />
            </form>
        )
    }
}

export default RegisterForm;