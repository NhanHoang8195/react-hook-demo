import React, { Component } from 'react';
import withHoc from '../hoc';
import { LayoutContext, LanguageContext } from '../../context';
import Button from '../../components/button';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            name: 'Nhan',
            surname: 'Hoang',
        };
        this.handleClick = this.handleClick.bind(this);
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

    handleClick() {
        console.log(this);
        this.aaa();
       // this.setState({count: this.state.count + 1});
    };
    aaa() {
        console.log(this);
    }
    handleChangeName (e) {
        this.setState({name: e.target.value});
    }
    handleChangeSurname (e) {
        this.setState({surname: e.target.value});
    }
    render() {
        return (
            <LayoutContext.Consumer>
                {theme => (
                    <div className={theme}>
                        <form>
                            <div>
                                <p>Here is class component. Count is <b>{this.props.count}</b></p>
                                <Button onClick={this.props.onClick}/>
                                <Button onClick={this.handleClick}/>
                            </div>
                            <label>Name:</label>
                            <input value={this.state.name} onChange={this.handleChangeName} />
                            <label>Surname:</label>
                            <input value={this.state.surname} onChange={this.handleChangeSurname} />
                            <LanguageContext.Consumer>
                                {language => (
                                    <>
                                        <label>Language:</label>
                                        <input defaultValue={language} />
                                    </>
                                )}
                            </LanguageContext.Consumer>
                        </form>
                    </div>
                )}
            </LayoutContext.Consumer>
        );
    }
}

export default withHoc(ClassComponent);