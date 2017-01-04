import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import config from '../config'
import rootReducer from './reducers'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config.firebase)
  }

  render() {
    return (
      <Provider store={createStore(rootReducer)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    )
  }
}

export default App
