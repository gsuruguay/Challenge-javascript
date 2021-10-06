import React from "react";
import Home from "./Components/Home/Home"
import AbmOperation from "./Components/AbmOperations/AbmOperations";
import NavBar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Switch, Route } from "react-router-dom";
import './App.css';

class App extends React.Component {
  state = {
    allOperations: [],
    limitOperations: [],
    amountOperations: [],
    balance: []
  }

  peticionGet = async () => {
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

  render() {
    return (
      <>
        <NavBar />
        <div className="mt-5 mb-4 pt-3">
          <Switch>
            <Route exact path="/">
              <Home amountOperations={this.state.amountOperations} balance={this.state.balance} limitOperations={this.state.limitOperations} />
            </Route>

            <Route exact path="/abm">
              <AbmOperation allOperations={this.state.allOperations} peticionGet={this.peticionGet} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;