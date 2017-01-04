import React, { Component } from 'react'
import firebase from 'firebase'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import config from '../config'
import rootReducer from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config.firebase)
  }

  render() {
    return (
      <Provider store={createStore(rootReducer)}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
