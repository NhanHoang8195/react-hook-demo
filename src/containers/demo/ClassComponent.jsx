import React, { Component } from 'react';
import { LayoutContext, LanguageContext } from '../../context';

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Nhan',
            surname: 'Hoang',
            width: window.innerWidth,
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeWindowWidth = this.onChangeWindowWidth.bind(this);
    }
    componentDidMount() {
        document.title = this.state.surname + ' ' + this.state.name;
        window.addEventListener('resize', this.onChangeWindowWidth);
    }
    componentDidUpdate() {
        document.title = this.state.surname + ' ' + this.state.name;
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onChangeWindowWidth);
    }

    onChangeName(e) {
        this.setState({name: e.target.value});
    }
    onChangeSurname(e) {
        this.setState({surname: e.target.value});
    }
    onChangeWindowWidth() {
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
                            <input value={this.state.name} onChange={this.onChangeName} />
                            <label>Surname:</label>
                            <input value={this.state.surname} onChange={this.onChangeSurname} />
                            <LanguageContext.Consumer>
                                {language => (<>
                                    <label>Language:</label>
                                    <input value={language} readOnly />
                                </>)}
                            </LanguageContext.Consumer>
                            <label>Window width:</label>
                            <input value={this.state.width} readOnly />
                        </form>
                    </div>
                )}
            </LayoutContext.Consumer>
        );
    }
}