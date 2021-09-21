import React from "react";
import './App.css';
import Operation from "./Components/Operation/Operation"


export default class App extends React.Component {
  state = {
    operations: [],
    amountOperations: {},
    balance: {}
  }


  //Funcion para traer json de operaciones
  async componentDidMount() {
    const res = await fetch('http://localhost:3333/');
    const data = await res.json();
    this.setState({ 
      operations: data.limitOperations,
      amountOperations: data.amountOperations,
      balance: data.balance
    })
  }

  render() {
    return (
      <div>
        <div className="container">        
            <div className="row">
                {this.state.operations.map(operation => <Operation operation={operation}/> )}
            </div>
        </div>
      </div>
    );
  }
}