import React, { Component } from 'react';

export default class ClassComponent extends Component {
    render() {
        return (
                <div>
                    <form>
                        <p>Here is class component</p>
                        <label>Name:</label>
                        <input value={this.props.name} readOnly />
                    </form>
                </div>
        );
    }
}