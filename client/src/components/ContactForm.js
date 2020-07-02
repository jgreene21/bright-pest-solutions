import React from "react";
import { Form, Button, Header, } from "semantic-ui-react";
import axios from "axios";
import { AuthConsumer, } from "../providers/AuthProvider";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      preference: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3001/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      phone: "",
      preference: "",
      message: "",
    });
  }

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Form className="yellow-muted" style={{ padding: "35px"}} onSubmit={this.handleSubmit}>
        <Header style={style.form}>How May We Help You?</Header>
        <br />
        <Form.Field>
          <label
            style={{
              fontFamily: "Poppins",
              fontWeight: "normal",
              fontSize: "13px",
              lineHeight: "19px",
            }}
          >
            Name:
          </label>
          <input placeholder="" />
        </Form.Field>
        <Form.Field>
          <label
            style={{
              fontFamily: "Poppins",
              fontWeight: "normal",
              fontSize: "13px",
              lineHeight: "19px",
            }}
          >
            Email:
          </label>
          <input placeholder="" />
        </Form.Field>
        <Form.Field>
          <label
            style={{
              fontFamily: "Poppins",
              fontWeight: "normal",
              fontSize: "13px",
              lineHeight: "19px",
            }}
          >
            Phone:
          </label>
          <input placeholder="" />
        </Form.Field>
        <Form.Group inline>
          <label
            style={{
              fontFamily: "Poppins",
              fontWeight: "normal",
              fontSize: "13px",
              lineHeight: "19px",
            }}
          >
            Preference:
          </label>
          <Form.Radio
            style={{
              fontFamily: "Poppins",
              fontWeight: "normal",
              fontSize: "13px",
              lineHeight: "19px",
            }}
            label="email"
            value="email"
            checked={value === "email"}
            onChange={this.handleChange}
          />
          <Form.Radio
            style={{
              fontFamily: "Poppins",
              fontWeight: "normal",
              fontSize: "13px",
              lineHeight: "19px",
            }}
            label="phone"
            value="phone"
            checked={value === "phone"}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field>
          <label
            style={{
              fontFamily: "Poppins",
              fontWeight: "normal",
              fontSize: "13px",
              lineHeight: "19px",
            }}
          >
            Message:
          </label>
        </Form.Field>
        <Form.TextArea ></Form.TextArea>
        <Button type="submit" style={style.button}>
          Submit
        </Button>
      </Form>
    );
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPhoneChange(event) {
    this.setState({ phone: event.target.value });
  }

  onPreferenceChange(event) {
    this.setState({ preference: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
};

export default class ConnectedContactForm extends React.Component {
  render() {
    return(
      <AuthConsumer>
        {auth => <ContactForm { ...this.props } auth={auth}/>}
      </AuthConsumer>
    )
  }
}


const style = {
  form: {
    fontFamily: "Poppins",
    fontWeight: 300,
    fontSize: "18px",
    lineHeight: "27px",
    textAlign: "center",
  },
  button: {
    backgroundColor: "white",
    color: "#f5ce42",
    fontFamily: "poppins",
    fontWeight: "normal",
    fontSize: "13px",
    lineHeight: "19px",
  },
};

