import React from "react";
import './App.css';
//import Operation from "./Components/Operation/Operation";
//import Balance from "./Components/Balance/Balance";
import Home from "./Components/Home/Home"
import AbmOperation from "./Components/AbmOperations/AbmOperations";
import { Switch, Route } from "react-router-dom";



class App extends React.Component {
  state = {
    allOperations: [],
    limitOperations: [],
    amountOperations: [],
    balance: []
  }

  peticionGet = async () =>{
    const res = await fetch('http://localhost:3333/');
    const data = await res.json();
    this.setState({
      allOperations: data.allOperations,
      limitOperations: data.limitOperations,
      amountOperations: data.amountOperations,
      balance: data.balance
    })
  }

  async componentDidMount() {
    this.peticionGet();
  }
/*   async componentDidMount() {
    const res = await fetch('http://localhost:3333/');
    const data = await res.json();
    this.setState({
      allOperations: data.allOperations,
      limitOperations: data.limitOperations,
      amountOperations: data.amountOperations,
      balance: data.balance
    })
  } */

  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home amountOperations={this.state.amountOperations} balance={this.state.balance}  limitOperations={this.state.limitOperations}/>
          </Route>

          <Route exact path="/abm">
            <AbmOperation allOperations={this.state.allOperations} peticionGet={this.peticionGet}/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;