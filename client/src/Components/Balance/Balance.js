import React from 'react';
//import "./Balance.css";

class Balance extends React.Component {

    render() {
        const { amountOperations, balance } = this.props;
        return (
            <table>
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
            </table>
        )
    }
}

export default Balance;