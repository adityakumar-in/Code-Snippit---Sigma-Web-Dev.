import React, { Component } from 'react'

export default class Navbar extends Component {
  // Optional
  constructor(props) {
    super(props)
  }
  render() { // You don't have to pass props as a parameter in Class based Components or You can use constructor to use
    return (
      <div>
        hello, {this.props.name}
      </div>
    )
  }
}
