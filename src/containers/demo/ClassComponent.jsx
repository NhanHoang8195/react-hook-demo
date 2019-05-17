import React, { Component } from 'react';
import { LayoutContext, LanguageContext } from '../../context';

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Nhan',
            surname: 'Hoang',
            width: window.innerWidth,
        };
        this.handleChangeName= this.handleChangeName.bind(this);
        this.handleChangeSurname= this.handleChangeSurname.bind(this);
        this.handleChangeWidth= this.handleChangeWidth.bind(this);
    }
    componentDidMount() {
        document.title = this.state.surname + ' ' + this.state.name;
        window.addEventListener('resize', this.handleChangeWidth);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        document.title = this.state.surname + ' ' + this.state.name;
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleChangeWidth);
    }

    handleChangeName(e) {
        this.setState(({name: e.target.value}));
    }
    handleChangeSurname(e) {
        this.setState(({surname: e.target.value}));
    }
    handleChangeWidth() {
        this.setState({width: window.innerWidth});
    }
    render() {
        return (
            <LayoutContext.Consumer>
                {theme => (
                    <div className={theme}>
                        <form>
                            <p>Here is class component</p>
                            <label>Name:</label>
                            <input value={this.state.name} onChange={this.handleChangeName} />
                            <label>Surame:</label>
                            <input value={this.state.surname} onChange={this.handleChangeSurname} />
                            <LanguageContext.Consumer>
                                {language => (
                                    <>
                                        <label>Language:</label>
                                        <input value={language} readOnly />
                                    </>
                                )}
                            </LanguageContext.Consumer>
                            <label>Width:</label>
                            <input value={this.state.width} readOnly />
                        </form>
                    </div>
                )}
            </LayoutContext.Consumer>
        );
    }1
}