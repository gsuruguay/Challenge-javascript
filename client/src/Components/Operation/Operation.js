import React from 'react';
//import "./Operation.css";

class Operation extends React.Component {

    render() {
        const { limitOperations } = this.props;
        return (
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Concept</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {limitOperations.map((operation, index) =>
                        <tr key={operation.id}>
                            <td>{index + 1}</td>
                            <td>{operation.concept}</td>
                            <td>${operation.amount}</td>
                            <td>{operation.date.slice(0, 10)}</td>
                            <td>{operation.type}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
}

export default Operation;