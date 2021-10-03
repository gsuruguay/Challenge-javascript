import React from 'react';
import Operation from "../Operation/Operation";
import Balance from "../Balance/Balance";
import {Container} from "react-bootstrap";

class Home extends React.Component {

    render() {
        return (
            <Container>
                <h3>Current balance</h3>
                <Balance amountOperations={this.props.amountOperations} balance={this.props.balance} />
                <h3>Last 10 operations</h3>
                <Operation limitOperations={this.props.limitOperations} />
            </Container>
        )
    }
}

export default Home;