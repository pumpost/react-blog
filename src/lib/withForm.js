import React, { Component } from 'react'

const withForm = fields => WrappedComponent => class extends Component {
  state = fields.reduce((result, field) => ({ ...result, [field]: '' }), {})

  getFields() {
    return Object.keys(this.state).reduce(
      (fields, field) => ({
        ...fields,
        [field]: {
          value: this.state[field],
          onChange: (e) => this.setState({ [field]: e.target.value }),
        }
      }),
      {}
    )
  }

  clearFields = () => {
    const newState =
      Object.keys(this.state).reduce(
        (result, key) => ({ ...result, [key]: '' }),
        {}
      )

    this.setState(newState)
  }

  render() {
    return (
      <WrappedComponent
        {...this.props}
        {...this.getFields()}
        clearFields={this.clearFields} />
    )
  }
}

export default withForm