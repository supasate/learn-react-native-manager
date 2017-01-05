import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Input, Button } from './common'

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onButtonPress() {
    const { email, password } = this.props

    this.props.loginUser({ email, password })
  }

  render() {
    const { email, password } = this.props
    return (
      <Card>
        <CardSection>
          <Input
            value={email}
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            value={password}
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
}

const mapStateToProps = ({ auth: { email, password, error } }) => ({
  email,
  password,
  error,
})

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)
