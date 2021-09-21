import React from 'react';
//import "./Product.css";

class Operation extends React.Component {

    render() {
        const { operation } = this.props;
        return (
            <div key={operation.id} className="cont-card">
                <div className="card">
                    <div className="card-body">
                        <h2>{operation.type}</h2>
                        <p>{operation.concept}</p>
                        <p>{operation.date}</p>
                        <h1 className="price">${operation.amount}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Operation;