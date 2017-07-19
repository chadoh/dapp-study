import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    text: "",
  };

  submit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({text: ""});
  };

  change = e => {
    this.setState({text: e.target.value});
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input type="text" value={this.state.text} onChange={this.change}/>
      </form>
    );
  }
}
