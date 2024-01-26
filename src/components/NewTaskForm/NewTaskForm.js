import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './NewTaskForm.css'

export default class NewTaskForm extends Component {
  static defaultProps = {
    onItemAdded: () => {},
  }

  static propTypes = {
    onItemAdded: PropTypes.func.isRequired,
  }

  state = {
    label: '',
  }

  onLabelChange = (event) => {
    this.setState({ label: event.target.value })
  }

  onChangeTime = (event) => {
    const { value, name } = event.target

    this.setState({
      [name]: value,
    })

    if (!value.trim()) this.setState({ [name]: '' })
  }

  onSubmit = (event) => {
    const { label } = this.state
    event.preventDefault()
    this.props.onItemAdded(label)
    this.setState({
      label: '',
    })
  }

  render() {
    const { label } = this.state
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
          value={label}
          autoFocus
        ></input>

        <input className="new-todo-form__submit" type="submit" />
      </form>
    )
  }
}
