import React, { Component } from 'react';
import withHoc from '../hoc';
import { LayoutContext, LanguageContext } from '../../context';

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
       this.setState({count: this.state.count + 1});
    };
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