import React from 'react';
import { Form, Button } from "react-bootstrap";

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
                        <Form.Control type="text" name="concept" placeholder="Place the concept of the operation" onChange={this.props.handleSubmit} value={this.props.valueForm ? this.props.valueForm.concept : ""} />
                        {this.props.fails.concept ? <Form.Text className="text-muted">
                            {this.props.fails.concept}
                        </Form.Text> : ""}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="amount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" name="amount" step="0.01" min="0" max="999999" placeholder="Amount of the operation" onChange={this.props.handleSubmit} value={this.props.valueForm ? this.props.valueForm.amount : ""} />
                        {this.props.fails.amount ? <Form.Text className="text-muted">
                            {this.props.fails.amount}
                        </Form.Text> : ""}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" name="date" onChange={this.props.handleSubmit} value={this.props.valueForm ? this.props.valueForm.date : ""} />
                        {this.props.fails.date ? <Form.Text className="text-muted">
                            {this.props.fails.date}
                        </Form.Text> : ""}
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
                            {this.props.fails.type ? <Form.Text className="text-muted">
                                {this.props.fails.type}
                            </Form.Text> : ""}
                        </Form.Group>
                    }

                    {this.props.tipoForm === "update" ?
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