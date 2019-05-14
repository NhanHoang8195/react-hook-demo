import React, { Component } from 'react';
import withHoc from '../hoc';
import Button from '../../components/button';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            name: 'Nhan',
            surname: 'Hoang',
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSurname = this.handleChangeSurname.bind(this);
    }
    componentDidMount() {
        // call api
        document.title = this.state.surname + ' ' + this.state.name;
    }
    componentDidUpdate() {
        // call the same api
        document.title = this.state.surname + ' ' + this.state.name;
    }

    handleChangeName (e) {
        this.setState({name: e.target.value});
    }
    handleChangeSurname (e) {
        this.setState({surname: e.target.value});
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <p>Here is class component. Count is <b>{this.props.count}</b></p>
                        <Button onClick={this.props.onClick}/>
                    </div>
                    <label>Name:</label>
                    <input value={this.state.name} onChange={this.handleChangeName} />
                    <label>Surname:</label>
                    <input value={this.state.surname} onChange={this.handleChangeSurname} />
                </form>
            </div>
        );
    }
}

export default withHoc(ClassComponent);