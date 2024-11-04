import React, { Component } from 'react'
import Navbar from './components/Navbar'

export default class App extends Component {
  constructor() {
    super()

    // Defining State in React
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <>
        {/* Sending Props - Props are read-only doc */}
        {/* Props can be accessed by child component  */}
        <Navbar name="Aditya" />

        {/* Sending State - Can be changed Dynamically */}
        <Navbar name={this.state.count} />
        Hello, I am Class Based Component

        {/* Updating State  */}
        <button onClick={()=>this.setState({count: this.state.count+1})}>Count {this.state.count}</button>
      </>
    )
  }
}
