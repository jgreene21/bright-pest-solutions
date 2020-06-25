import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Form, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom'

class Login extends React.Component {
  state = { email: '', password: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.auth.handleLogin({ email, password, }, this.props.history);
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, } = this.state;

    return (
      <div>
        <div >
          <h1 >Admin Login</h1>
        </div>
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input
              label="Email"
              autoFocus
              required
              name='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
            <Form.Input
              label="Password"
              required
              name='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            />
          <div>
            <div style={{width:"45%"}}>
            <Link to='/'>Cancel</Link>
            </div>
            <div style={{width:"45%"}}>
            <div  onClick={this.handleSubmit}>Login</div>
            </div>
          </div>
          </Form>
        </div>
      </div>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}