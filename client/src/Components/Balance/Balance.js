import React from 'react';
import {Table} from "react-bootstrap";
//import "./Balance.css";

class Balance extends React.Component {

    render() {
        const { amountOperations, balance } = this.props;
        return (
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Total entries</th>
                        <th>Total expenses</th>
                        <th>AVAILABLE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${amountOperations.entry}</td>
                        <td>${amountOperations.egress}</td>
                        <td>${balance}</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default Balance;