import React from 'react';
import AllOperation from '../AllOperations/AllOperations';
//import RegisterForm from '../RegisterForm/RegisterForm';
import OperationsForm from '../OperationsForm/OperationsForm';
import axios from "axios";
import Swal from 'sweetalert2';


class AbmOperation extends React.Component {

    state = {
        form: {
            //id: "",
            concept: "",
            amount: "",
            date: "",
            type: ""
        },
        isUpdateForm: false,
        //agregado para nueva version de form
        tipoForm: ""
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

    peticionDelete = async (id) => {
        let result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        if (result.isConfirmed) {
            let response = await axios.delete("http://localhost:3333/deleteOperation/" + id)
            try {
                if (response.status === 200) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
                this.props.peticionGet();
            } catch (error) {
                console.error(error)
            }
        }
    }

    peticionPut = async (e) => {
        e.preventDefault();
        let response = await axios.put("http://localhost:3333/setOperation/" + this.state.form.id, this.state.form)
        try {
            if (response.status === 200) {
                Swal.fire(
                    'Good job!',
                    'Operation UPDATE successfully!',
                    'success'
                )
                this.props.peticionGet();
                this.resetForm();
                this.changeUpdateForm(false);
                this.setState({
                    tipoForm: ""
                })
            }
            console.log(response);
        } catch (error) {
            console.error(error)
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
        console.log(this.state.isUpdateForm);
    }

    resetForm = () => {
        this.setState({
            tipoForm: "",
            form: {
                id: "",
                concept: "",
                amount: "",
                date: "",
                type: ""
            }
        })
    }

    selectOperation = (operation) => {
        this.setState({
            tipoForm: "update",
            form: {
                id: operation.id,
                concept: operation.concept,
                amount: operation.amount,
                date: operation.date.slice(0, 10),
                type: operation.type
            }
        })
    }

    changeUpdateForm = (estado) => {
        this.setState({
            isUpdateForm: estado
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
                        <AllOperation allOperations={entryOperations} selectOperation={this.selectOperation} isUpdateForm={this.state} changeUpdateForm={this.changeUpdateForm} peticionDelete={this.peticionDelete} />
                        <h3>Egress Operations</h3>
                        <AllOperation allOperations={egressOperations} selectOperation={this.selectOperation} changeUpdateForm={this.changeUpdateForm} peticionDelete={this.peticionDelete} />
                    </div>
                    <div className="cont-form">
                        <OperationsForm handleSubmit={this.handleSubmit} peticionPut={this.peticionPut} peticionPost={this.peticionPost} valueForm={this.state.form} tipoForm={this.state.tipoForm} resetForm={this.resetForm} />



                        {/*                         {this.state.isUpdateForm ? <UpdateForm handleSubmit={this.handleSubmit} peticionPut={this.peticionPut} valueForm={this.state.form} />
                            :
                            <RegisterForm handleSubmit={this.handleSubmit} peticionPost={this.peticionPost} valueForm={this.state.form} />
                        } */}
                    </div>
                </div>
            </div>
        )
    }
}

export default AbmOperation;