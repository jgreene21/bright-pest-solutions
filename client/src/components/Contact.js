import React from "react";
import { Grid, Image, Container, Segment } from "semantic-ui-react";
import RightArrow from "../images/RightArrow.png";
import LeftArrow from "../images/LeftArrow.png";
import ContactForm from "./ContactForm";
import SocialMedia from "./SocialMedia";
import Schedule from "../images/Schedule.png";

class Contact extends React.Component {

  render() {
    return (
      
      <Container>
        <Grid centered columns={2}>
          <Grid.Column width={7}>
            <h1 style={style.header}>Contact Us</h1>
            <p style={style.body}>
              Got a question for us, shoot us a message and we will get back to
              you shortly.
            </p>
            <Image
              src={RightArrow}
              style={{ marginTop: "30px", marginLeft: "30px" }}
            />
          </Grid.Column>
          <Grid.Column width={7}>
            <ContactForm />
          </Grid.Column>
        </Grid>
        <Grid centered columns={2} style={{ marginBottom: "150px" }}>
          <Grid.Column width={7}>
            <Segment inverted >
              <p style={style.appointment}>Book your appointment today!</p>
            </Segment>
            <iframe style={style.iframe}
            width="480"
            height="600"
            src='https://squareup.com/appointments/book/910n1tuza8svg2/QPQYCW64FC4N9/start'></iframe>
          </Grid.Column>
          <Grid.Column width={7} style={{marginTop: "60px"}}>
            <p style={style.body}>
              <span style={style.byePest}>Ready to be pest free,</span> find a day and time that works
              for you and we will send you an email reminder of your
              appointment.
            </p>
            <Image src={LeftArrow} style={{ marginLeft: "50px" }} />
          </Grid.Column>
        </Grid>
        <SocialMedia />
      </Container>
    );
  }
}

const style = {
  header: {
    fontFamily: "Poppins",
    fontWeight: "normal",
    fontSize: "36px",
    lineHeight: "54px",
    marginTop: "100px",
    alignItems: "center",
    textAlign: "center",
  },
  body: {
    fontFamily: "Poppins",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "1.6",
  },
  appointment: {
      color: "white",
      textTransform: "uppercase",
      fontFamily: "Poppins",
      letterSpacing: "1px",
      lineHeight: "38px",
      borderRadius: "3px",
      fontWeight: "200",
      fontSize: "14px",
      textAlign: "center"
    },
  iframe: {
    border: "1px solid #f5ce42",
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgba(0.25, 0, 0, 0.25)",
    color: "#f5ce42", 
  },
  byePest: {
    fontFamily: "Poppins",
    fontWeight: "normal",
    fontSize: "28px",
    lineHeight: "1.6",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
};

export default Contact;
