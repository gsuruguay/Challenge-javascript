import React from 'react';
import AllOperation from '../AllOperations/AllOperations';

class AbmOperation extends React.Component {

    render() {
        
        const {allOperations} = this.props;

        let entryOperations = allOperations.filter( element => element.type === "entry");
        let egressOperations = allOperations.filter( element => element.type === "egress");

        return (
            <div>
                <h3>Entry Operations</h3>
                <AllOperation allOperations={entryOperations}/>
                <h3>Egress Operations</h3>
                <AllOperation allOperations={egressOperations}/>
            </div>
        )
    }
}

export default AbmOperation;