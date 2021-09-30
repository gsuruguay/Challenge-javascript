import React from 'react';
import AllOperation from '../AllOperations/AllOperations';
import RegisterForm from '../RegisterForm/RegisterForm';
import axios from "axios";
import Swal from 'sweetalert2';


class AbmOperation extends React.Component {

    state = {
        form: {
            concept: "",
            amount: "",
            date: "",
            type: ""
        }
    }

    peticionPost = async (e) => {
        e.preventDefault();
        let response = await axios.post("http://localhost:3333/createOperation", this.state.form)
        try {
            if (response.status === 200) {
                Swal.fire(
                    'Good job!',
                    'Operation saved successfully!',
                    'success'
                )
                this.props.peticionGet();
                this.resetForm();
            }
        } catch (error) {
            console.error(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    }

    handleSubmit = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    resetForm = ()=>{
        this.setState({
            form:{
                concept: "",
                amount: "",
                date: "",
                type: ""
            }
        })
    }

    render() {

        const { allOperations } = this.props;

        let entryOperations = allOperations.filter(element => element.type === "entry");
        let egressOperations = allOperations.filter(element => element.type === "egress");

        return (
            <div className="container">
                <div className="row">
                    <div className="cont-operations">
                        <h3>Entry Operations</h3>
                        <AllOperation allOperations={entryOperations} />
                        <h3>Egress Operations</h3>
                        <AllOperation allOperations={egressOperations} />
                    </div>
                    <div className="cont-form">
                        <RegisterForm handleSubmit={this.handleSubmit} peticionPost={this.peticionPost} valueForm={this.state.form}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AbmOperation;