import React from "react";
import { Form, Button, Header } from "semantic-ui-react";

class ContactForm extends React.Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });
  render() {
    const { value } = this.state;
    return (
      <Form className="yellow-muted" style={{ padding: "35px" }}>
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
        <Form.TextArea style={{ height: "242px" }}></Form.TextArea>
        <Button type="submit" style={style.button}>
          Submit
        </Button>
      </Form>
    );
  }
};

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
  }
}
export default ContactForm; 
