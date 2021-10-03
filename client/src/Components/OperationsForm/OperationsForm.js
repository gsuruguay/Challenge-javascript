import React from 'react';
import { Form, Button } from "react-bootstrap";
//import "./OperationsForm.css";

class OperationsForm extends React.Component {

    render() {
        return (
            <>
            <h3>Form Operations</h3>
            <Form onSubmit={this.props.tipoForm === "update" ? this.props.peticionPut : this.props.peticionPost}
            >
                {(this.props.tipoForm === "update") ?
                    <input type="hidden" name="id" placeholder="Id" readOnly value={this.props.valueForm ? this.props.valueForm.id : ""} />
                    : ""
                }
                <Form.Group className="mb-3" controlId="concept">
                    <Form.Label>Concept</Form.Label>
                    <Form.Control type="text" name="concept" placeholder="Concept" onChange={this.props.handleSubmit} value={this.props.valueForm ? this.props.valueForm.concept : ""} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="amount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" name="amount" step="0.01" min="0" max="999999" placeholder="Amount" onChange={this.props.handleSubmit} value={this.props.valueForm ? this.props.valueForm.amount : ""} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" name="date" onChange={this.props.handleSubmit} value={this.props.valueForm ? this.props.valueForm.date : ""} />
                </Form.Group>

                {(this.props.tipoForm === "update") ?
                    <Form.Group className="mb-3" controlId="type">
                        <Form.Control type="text" name="type" placeholder="Type" disabled value={this.props.valueForm.type} />
                        <Form.Text className="text-muted">
                            You cannot modify the type of operation.
                        </Form.Text>
                    </Form.Group>
                    :
                    <Form.Group className="mb-3" controlId="type">
                        <Form.Label>Type</Form.Label>
                        <Form.Select name="type" onChange={this.props.handleSubmit} value={this.props.valueForm ? this.props.valueForm.type : ""}>
                            <option selected>Select type</option>
                            <option value="egress">egress</option>
                            <option value="entry">entry</option>
                        </Form.Select>
                    </Form.Group>
                }

                {
                    this.props.tipoForm === "update" ?
                        <Button variant="warning" type="submit">
                            Update
                        </Button>

                        : <Button variant="success" type="submit">
                            Add
                        </Button>
                }

                <Button variant="secondary" type="reset" className="m-3" onClick={() => this.props.resetForm()}>
                    Cancel
                </Button>
            </Form >
            </>
        )
    }
}

export default OperationsForm;