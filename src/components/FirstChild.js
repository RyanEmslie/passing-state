import React, { Component } from "react";
import SecondChild from "./SecondChild";

class FirstChild extends Component {
    render() {
        return (
            <div>
                <hr />
                <h1>First Child Component</h1>
                {/* The props allows state from parent to be displayed   */}
                <h2>
                    First Name: {this.props.firstName}
                    {<br />}Last Name: {this.props.lastName}
                    {<br />}
                    Occupation: {this.props.occupation}
                </h2>
                {/* Method passed to child as prop so that data
                from child can be passed up to APP */}
                <SecondChild
                    firstName={this.props.firstName}
                    lastName={this.props.lastName}
                    occupation={this.props.occupation}
                    passUp={this.props.passUp}
                />
            </div>
        );
    }
}

export default FirstChild;
