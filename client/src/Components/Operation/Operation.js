import React from 'react';
//import "./Product.css";

class Operation extends React.Component {

    render() {
        const { operation, index } = this.props;
        return (
            <tr key={operation.id}>
                <td>{index + 1}</td>
                <td>{operation.concept}</td>
                <td>${operation.amount}</td>
                <td>{operation.date.slice(0,10)}</td>
                <td>{operation.type}</td>
            </tr>
        )
    }
}

export default Operation;