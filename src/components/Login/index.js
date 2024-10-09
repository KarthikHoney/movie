import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', errorMsg: '', showErrorMsg: false}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  LoginFetch = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <div>
        <label htmlFor="user">Username</label>
        <br />
        <input
          type="text"
          id="user"
          onChange={this.onChangeUsername}
          placeholder="Enter Username"
          value={username}
          className="user"
        />
      </div>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <div>
        <label htmlFor="pass">Password</label>
        <br />
        <input
          type="password"
          id="pass"
          onChange={this.onChangePassword}
          placeholder="Enter Password"
          value={password}
          className="user"
        />
      </div>
    )
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token') // Check for token

    if (jwtToken) {
      return <Redirect to="/" /> // Redirect to home if already logged in
    }

    return (
      <div className="mainContainer">
        <Header />
        <section>
          <form onSubmit={this.LoginFetch} className="formField">
            <h1>Login</h1>
            {this.renderUsername()}
            {this.renderPassword()}
            <button type="submit">Login</button>
            {showErrorMsg && <p style={{color: 'red'}}>{errorMsg}</p>}
          </form>
        </section>
      </div>
    )
  }
}

export default Login
