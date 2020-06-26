import React from "react";
import {Image, Form, Header, Grid, Segment, Card, Icon, Button} from "semantic-ui-react";
import House from "../images/home.jpg";
import Pet from "../images/Pet.png";
import SmallLogo from "../images/SmallLogo.png";
import Eco from "../images/Eco.png";

import NoContract from "../images/NoContract.png";
import ContactForm from "./ContactForm";
import SocialMedia from "./SocialMedia";

class Home extends React.Component {
  render() {
    return (
      <div className="content" style={{ marginTop: "50px" }}>
        <Grid stackable columns={2}>
          <Grid.Column width={12}>
            <Image src={House} />
          </Grid.Column>
          <Grid.Column width={4}>
            <ContactForm />
          </Grid.Column>
        </Grid>
        <br />
        <div className="container">
          <Image src={Pet} /> <Image src={SmallLogo} style={{marginRight: "-20px"}}/><Image src={NoContract} style={{width: "85px", height: "80px", marginTop: "10px"}}/>
        </div>
        <div className="container" style={{marginLeft: "10px"}}>
          <span style={style.promise}>Pet/Kid Friendly</span>
          <span style={style.promise}>Professional Service</span>
          <span style={style.promise}>No Contracts</span>
        </div>
        <Segment
          className="yellow-muted"
          style={{ padding: "20px", marginBottom: "100px" }}
        >
          <h3 style={style.welcome}>
            Welcome to <span style={style.bright}>Bright Pest Solutions</span>
          </h3>
          <br />
          <p style={style.about}>
            Brief description of company and services go here{" "}
          </p>
          <br />
        </Segment>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-125px",
            marginBottom: "100px",
          }}
        >
          <Segment className="bugs">
            <p style={style.motto}>Customers love us! Bugs hate us!</p>
          </Segment>
        </div>
        <div
          className="container"
          style={{
            marginTop: "-75px",
            marginBottom: "150px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <Card.Group itemsPerRow={3}>
            <Card className="review">
              <Card.Content>
                <Card.Header style={style.title}>
                  <span style={{ textAlign: "center" }}>
                    <Icon name="star" size="big" />
                    <Icon name="star" size="big" />
                    <Icon name="star" size="big" />
                    <Icon name="star" size="big" />
                    <Icon name="star" size="big" />
                  </span>
                  <br />
                  <br />
                  No more ants!
                </Card.Header>
                <br />
                <Card.Description style={{ color: "white" }}>
                  Since Bright Pest Solutions sprayed my house a few months ago
                  I haven’t seen anymore ants in my home, even with all the
                  construction in my neighborhood. Such a relief.
                </Card.Description>
              </Card.Content>
              <Card.Content style={style.signature}>
                - James T. (Saratoga Springs)
              </Card.Content>
            </Card>
            <Card className="review">
              <Card.Content>
                <Card.Header style={style.title}>
                  <span style={{ textAlign: "center" }}>
                    <Icon name="star" size="big" />
                    <Icon name="star" size="big" />
                    <Icon name="star" size="big" />
                    <Icon name="star" size="big" />
                    <Icon name="star" size="big" />
                  </span>
                  <br />
                  <br />
                  Peace of Mind!
                </Card.Header>
                <br />
                <Card.Description style={style.body}>
                  Just so happy with Bright Pest Solutions results. I feel a
                  great peace of mind knowing that I’m protecting my home from
                  insects while keeping my children and pets safe from harsh
                  chemicals.
                </Card.Description>
              </Card.Content>
              <Card.Content style={style.signature}>
                - Jane C. (Lehi)
              </Card.Content>
            </Card>
            <Card className="review">
              <Card.Content>
                <Card.Header style={style.title}>
                  <span style={{ textAlign: "center" }}>
                    <Icon name="star" size="big" />
                    <Icon name="star" size="big" />
                    <Icon name="star" size="big" />
                    <Icon name="star" size="big" />
                    <Icon name="star" size="big" />
                  </span>
                  <br />
                  <br />
                  We love Bright Pest Solutions!
                </Card.Header>
                <br />
                <Card.Description style={style.body}>
                  Thanks so much for your professional and friendly services.
                  I’m so thrilled with the results and the process. Thank you.
                </Card.Description>
              </Card.Content>
              <Card.Content style={style.signature}>
                - Mark L. (Sandy)
              </Card.Content>
            </Card>
          </Card.Group>
        </div>
          <SocialMedia />
      </div>
    );
  }
}

const style = {
  promise: {
    fontFamily: "Poppins",
    fontWeight: 300,
    fontSize: "13px",
    lineHeight: "18px",
    marginLeft: "10px",
  },
  welcome: {
    fontFamily: "Poppins",
    fontWeight: 200,
    fontSize: "20px",
    lineHeight: "30px",
  },
  bright: {
    fontFamily: "Poppins",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "30px",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  about: {
    fontFamily: "Poppins",
    fontWeight: "normal",
    fontSize: "13px",
    lineHeight: "19px",
  },
  motto: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "21px",
    lineSpacing: "3",
    textAlign: "center",
    color: "#F5CE42",
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "19px",
    color: "#FFFFFF",
  },
  body: {
    fontFamily: "Poppins",
    fontWeight: 300,
    fontSize: "13px",
    lineHeight: "19px",
    color: "#FFFFFF",
  },
  signature: {
    fontFamily: "Poppins",
    fontWeight: 300,
    fontSize: "13px",
    lineHeight: "19px",
    color: "#FFFFFF",
    textAlign: "right",
    border: "none",
  },
};

export default Home;
