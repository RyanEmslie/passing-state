import React, { Component } from "react";

class SecondChild extends Component {
    // initial state of the child component
    state = {
        firstName: "George",
        lastName: "Washington",
        occupation: "President"
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <hr />
                <h1>This is the Second child</h1>
                <h2>
                    First Name: {this.props.firstName}
                    {<br />}Last Name: {this.props.lastName}
                    {<br />}
                    Occupation: {this.props.occupation}
                    <br />
                    {/* Onclick event calls method to send state up to Parent
                    need to bind event to 'this' and the information 
                    to be sent up */}
                    <button
                        type="button"
                        onClick={this.props.passUp.bind(this, this.state)}
                    >
                        Push Up Component State
                    </button>
                </h2>
                <h3>
                    Inital Second Child Component State: First: George, Last:
                    Washington, Occupation: President
                </h3>
            </div>
        );
    }
}

export default SecondChild;
