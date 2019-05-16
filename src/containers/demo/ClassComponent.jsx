import React, { Component } from 'react';
import { LanguageContext, LayoutContext } from '../../context';

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Nhan',
            surname: 'Hoang',
            width: window.innerWidth,
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSurname = this.handleChangeSurname.bind(this);
        this.handleChangeWindowSize = this.handleChangeWindowSize.bind(this);
    }
    componentDidMount() {
        document.title = this.state.surname + ' ' + this.state.name;
        window.addEventListener('resize', this.handleChangeWindowSize);
    }
    componentDidUpdate() {
        document.title = this.state.surname + ' ' + this.state.name;
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleChangeWindowSize);
    }

    handleChangeName(e) {
        this.setState({name: e.target.value});
    }
    handleChangeSurname(e) {
        this.setState({surname: e.target.value});
    }
    handleChangeWindowSize() {
        this.setState({width: window.innerWidth});
    }
    render() {
        return (
            <LayoutContext.Consumer>
                {theme => (<div className={theme}>
                    <form>
                        <p>Here is class component</p>
                        <label>Name:</label>
                        <input value={this.state.name} onChange={this.handleChangeName} />
                        <label>Surname:</label>
                        <input value={this.state.surname} onChange={this.handleChangeSurname} />
                        <LanguageContext.Consumer>
                            {language => (<>
                                <label>Language:</label>
                                <input value={language} readOnly />
                            </>)}
                        </LanguageContext.Consumer>
                        <label>Width:</label>
                        <input value={this.state.width} readOnly />
                    </form>
                </div>)}
            </LayoutContext.Consumer>
        );
    }
}