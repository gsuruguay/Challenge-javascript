import React from 'react';
import { Table, Button } from "react-bootstrap";

class AllOperation extends React.Component {

    render() {
        return (
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Concept</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.allOperations.map((operation, index) =>
                        <tr key={operation.id}>
                            <td>{operation.concept}</td>
                            <td>${operation.amount}</td>
                            <td>{operation.date.slice(0, 10)}</td>
                            <td>{operation.type}</td>
                            <td>
                                <Button variant="outline-warning" className="mb-1" onClick={() => { this.props.selectOperation(operation); this.props.changeUpdateForm(true) }}>
                                    Edit
                                </Button>{' '}
                                <Button className="mb-1" variant="outline-danger" onClick={() => { this.props.peticionDelete(operation.id) }}>
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        )
    }
}

export default AllOperation;