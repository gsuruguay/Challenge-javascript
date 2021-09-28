import React from 'react';
import AllOperation from '../AllOperations/AllOperations';
import RegisterForm from '../RegisterForm/RegisterForm';

class AbmOperation extends React.Component {

    state = {
        form: {
            concept: "",
            amount: "",
            date: "",
            type: ""
        }
    }

    handleSubmit = async e => {        
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        e.preventDefault();
        console.log(this.state.form);
    }



    render() {

        const { allOperations } = this.props;

        let entryOperations = allOperations.filter(element => element.type === "entry");
        let egressOperations = allOperations.filter(element => element.type === "egress");

        return (
            <div>
                <div>
                    <h3>Entry Operations</h3>
                    <AllOperation allOperations={entryOperations} />
                    <h3>Egress Operations</h3>
                    <AllOperation allOperations={egressOperations} />
                </div>
                <div>
                    <RegisterForm handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}

export default AbmOperation;