import React, { Component } from 'react';

export class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }
    handleClick = () => {
       this.setState({count: this.state.count + 1});
    };
    render() {
        console.log('class component', this.state.count);
        return (
            <div>
                Here is class component
                <p>Count is {this.state.count}</p>
                <button onClick={this.handleClick}>
                    Click me !!!
                </button>
            </div>
        );
    }
}