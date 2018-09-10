import { inject } from 'mobx-react'
import React from 'react'

@inject('toastStore')
export class App extends React.Component {
  render() {
    return (
      <div className="app">
        <ToastNotification channels={ [this.props.toastStore.helloWorld] } />
        <Button />
      </div>
    )
  }
}

@inject('toastStore')
export class Button extends React.Component {
  render() {
    return (
      <button onClick={ this.setNotification }>Say Hello</button>
    )
  }

  setNotification() {
    this.props.toastStore.setNotification({
      message: "Hello, World!",
      channel: this.props.toastStore.helloWorld,
      textColor: "white",
      backgroundColor: "blue",
      timeout: 1500
    })
  }
}
