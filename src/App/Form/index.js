import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

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
      <form className="Form" onSubmit={this.submit}>
        <p>
          <input placeholder="What needs to be done?" value={this.state.text} onChange={this.change}/>
        </p>
      </form>
    );
  }
}
