import React, { Component } from 'react';
import { LayoutContext, LanguageContext} from '../../context';

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
        this.handleChangeSize = this.handleChangeSize.bind(this);
    }
    componentDidMount() {
        document.title = this.state.surname + ' ' + this.state.name;
        window.addEventListener('resize', this.handleChangeSize);
    }
    componentDidUpdate() {
        document.title = this.state.surname + ' ' + this.state.name;
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleChangeSize);
    }

    handleChangeSize() {
        this.setState({width: window.innerWidth});
    }
    handleChangeName(e) {
        this.setState({name: e.target.value});
    }
    handleChangeSurname(e) {
        this.setState({surname: e.target.value});
    }
    render() {
        return (<LayoutContext.Consumer>
                { theme =>
                    (<div className={theme}>
                        <form>
                            <p>Here is class component</p>
                            <label>Name:</label>
                            <input value={this.state.name} onChange={this.handleChangeName} />
                            <label>Surname:</label>
                            <input value={this.state.surname} onChange={this.handleChangeSurname} />
                            <label>Width:</label>
                            <input value={this.state.width} readOnly />
                            <LanguageContext.Consumer>
                                {language => (<>
                                    <label>Language</label>
                                    <input value={language} readOnly />
                                </>)}
                            </LanguageContext.Consumer>
                        </form>
                    </div>)
                }
        </LayoutContext.Consumer>
        );
    };
}