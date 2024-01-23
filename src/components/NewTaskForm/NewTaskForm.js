import React from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

export default class NewTaskForm extends React.Component {
  static propTypes = {
    onAddTask: PropTypes.func.isRequired,
  };
  state = {
    value: '',
  };

  onChange = (e) => {
      this.setState({
          value: e.target.value
      })
  };

  onSubmit = (e) => {
      e.preventDefault();
      if (this.state.value !== ''){
        this.props.onAddTask(this.state.value);
        this.setState({
            value: ''
        })
      }
  };

  render() {
      return (
          <form onSubmit={this.onSubmit}>
            <input className="new-todo" 
            value={this.state.value}
            placeholder="What needs to be done?"
            onChange={this.onChange}
            autoFocus />
          </form>);
  }
};