import React from "react";
import './App.css';
import Operation from "./Components/Operation/Operation"
import Balance from "./Components/Balance/Balance"


class App extends React.Component {
  state = {
    operations: [],
    amountOperations: [],
    balance: []
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
      <div className="container">
        <Balance amountOperations={this.state.amountOperations} balance={this.state.balance} />

        <Operation operations={this.state.operations} />
      </div>
    );
  }
}

export default App;