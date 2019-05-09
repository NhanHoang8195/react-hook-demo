import React, { Component } from 'react';
import withHoc from '../hoc';
import {LayoutContext} from '../../context';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            name: 'Nhan',
            surName: 'Hoang',
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSurname = this.handleChangeSurname.bind(this);
    }
    componentDidMount() {
        // call api
        document.title = this.state.surName + ' ' + this.state.name;
    }
    componentDidUpdate() {
        // call the same api
        document.title = this.state.surName + ' ' + this.state.name;
    }

    handleClick() {
       this.setState({count: this.state.count + 1});
    };
    handleChangeName (e) {
        this.setState({name: e.target.value});
    }
    handleChangeSurname (e) {
        this.setState({surName: e.target.value});
    }
    render() {
        console.log('class component', this.state.count);
        return (
            <LayoutContext.Consumer>
                {theme => (

                )}
            </LayoutContext.Consumer>
        );
    }
}

export default withHoc(ClassComponent);