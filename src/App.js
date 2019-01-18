import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import FirstChild from "./components/FirstChild";

class App extends Component {
    // This is the initialized state
    state = {
        firstName: "Ryan",
        lastName: "Emslie",
        occupation: "Software Engineer"
    };

    // THis method is used to set the state of the App compoment
    // based on the props sent up by the child components
    passUp = e => {
        this.setState({
            firstName: e.firstName,
            lastName: e.lastName,
            occupation: e.occupation
        });
    };

    render() {
        // Debugging - showing the state prior to renderig
        console.log(this.state);

        return (
            <div className="App">
                <h1>This is the App Component</h1>
                <h2>
                    First Name: {this.state.firstName}
                    {<br />}Last Name: {this.state.lastName}
                    {<br />}
                    Occupation: {this.state.occupation}
                </h2>
                <h3>
                    Inital state: First: Ryan, Last: Emslie, Occupation:
                    Software Engineer
                </h3>
                <FirstChild
                    // initial state passed down to child component
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    occupation={this.state.occupation}
                    // method sent down to be used to send child state back to App component
                    passUp={this.passUp}
                />
            </div>
        );
    }
}

export default App;
