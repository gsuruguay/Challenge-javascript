import React from 'react';
import AllOperation from '../AllOperations/AllOperations';
import OperationsForm from '../OperationsForm/OperationsForm';
import axios from "axios";
import Swal from 'sweetalert2';
import { Container, Row, Col } from "react-bootstrap";
import validacion from "../../utils";

class AbmOperation extends React.Component {

    state = {
        form: {
            concept: "",
            amount: "",
            date: "",
            type: ""
        },
        isUpdateForm: false,
        tipoForm: "",
        fails: {
            concept: "Concept is requerid",
            amount: "Amount is requerid",
            date: "Date is requerid",
            type: "Type is requerid"
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
        } catch (error) {
            console.error(error)
        }
    }

    handleSubmit = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            },
            fails: validacion({
                ...this.state.form,
                [e.target.name]: e.target.value
            })
        });
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
            <Container fluid className="p-3">
                <Row>
                    <Col xs={12} md={8}>
                        <h3>Entry Operations</h3>
                        <AllOperation allOperations={entryOperations} selectOperation={this.selectOperation} isUpdateForm={this.state} changeUpdateForm={this.changeUpdateForm} peticionDelete={this.peticionDelete} />
                        <h3>Egress Operations</h3>
                        <AllOperation allOperations={egressOperations} selectOperation={this.selectOperation} changeUpdateForm={this.changeUpdateForm} peticionDelete={this.peticionDelete} />
                    </Col>
                    <Col>
                        <OperationsForm handleSubmit={this.handleSubmit} peticionPut={this.peticionPut} peticionPost={this.peticionPost} valueForm={this.state.form} tipoForm={this.state.tipoForm} resetForm={this.resetForm} fails={this.state.fails} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AbmOperation;