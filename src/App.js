import React, { Component } from 'react'
import firebase from 'firebase'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import config from '../config'
import rootReducer from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config.firebase)
  }

  render() {
    return (
      <Provider store={createStore(rootReducer, {}, applyMiddleware(thunk))}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
