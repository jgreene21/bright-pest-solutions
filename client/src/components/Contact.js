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
      <Container style={{ marginTop: "50px" }}>
        <Grid centered stackable columns={2}>
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
        <Grid centered stackable columns={2} style={{ marginBottom: "150px" }}>
          <Grid.Column width={7} style={{ marginTop: "-275px" }}>
            <Segment inverted >
              <p style={style.appointment}>Book your appointment today!</p>
            </Segment>
            <Image src={Schedule} />
          </Grid.Column>
          <Grid.Column width={7} style={{marginTop: "60px"}}>
            <p style={style.body}>
              Ready to rid your home of pests, find a day and time that works
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
    lineHeight: "30px",
  },
  appointment: {
    fontFamily: "Poppins",
    fontStyle: "italic",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center",
    padding: "20px",
  },
};

export default Contact;
