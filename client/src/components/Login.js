import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Form, Button, } from 'semantic-ui-react';

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
              style={{
                fontFamily: "Poppins !important",
                fontWeight: "normal",
                fontSize: "13px",
                lineHeight: "19px",
              }}
              required
              name='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            />
          <div>
            <div style={{width:"45%"}}>
            <Button style={style.button} onClick={this.handleSubmit}>Login</Button>
            </div>
          </div>
          </Form>
        </div>
      </div>
    )
  }
};

const style ={
  button: {
    backgroundColor: "black",
    color: "white",
    height: "40px",
    textTransform: "uppercase",
    fontFamily: "Poppins",
    letterSpacing: "1px",
    lineHeight: "38px",
    padding: "0 28px",
    borderRadius: "3px",
    fontWeight: "200",
    fontSize: "14px",
    cursor: "pointer",
    display: "inline-block",
    marginBottom: "30px",
    textAlign: "center"
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <div style={{marginRight: "50px", marginLeft: "50px", marginBottom: "420px"}}>
      <AuthConsumer>
        {auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
      </div>
    )
  }
}