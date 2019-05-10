import React, {Component} from 'react';


export default function withHoc(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 1,
            };
        }
        handleChange = () => {
            this.setState({count: this.state.count + 1});
        };
        render() {
            return <WrappedComponent count={this.state.count} {...this.props} onClick={this.handleChange} />
        }
    }
}