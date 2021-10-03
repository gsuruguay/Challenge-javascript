import React from 'react';
import Operation from "../Operation/Operation";
import Balance from "../Balance/Balance";

class Home extends React.Component {

    render() {
        return (
            <>
                <Balance amountOperations={this.props.amountOperations} balance={this.props.balance} />
                <Operation limitOperations={this.props.limitOperations} />
            </>
        )
    }
}

export default Home;