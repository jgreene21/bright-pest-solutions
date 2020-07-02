import React from "react";
import { Image, Grid, Segment } from "semantic-ui-react";
import House from "../images/home.jpg";
import Pet from "../images/Pet.png";
import SmallLogo from "../images/SmallLogo.png";
import NoContract from "../images/NoContract.png";
import ContactForm from "./ContactForm";
import SocialMedia from "./SocialMedia";
import Review from "./Review";

class Home extends React.Component {
  render() {
    return (
      <div className="content">
        <Grid stackable columns={2}>
          <Grid.Column width={11}>
            <Image src={House}  />
          </Grid.Column>
          <Grid.Column width={5}>
            <ContactForm />
          </Grid.Column>
        </Grid>
        <br />
        <div className="container">
          <Image src={Pet} />{" "}
          <Image src={SmallLogo} style={{ marginRight: "-20px" }} />
          <Image
            src={NoContract}
            style={{ width: "85px", height: "80px", marginTop: "10px" }}
          />
        </div>
        <div className="container" style={{ marginLeft: "10px" }}>
          <span style={style.promise}>Pet/Kid Friendly</span>
          <span style={style.promise} style={{ marginLeft: "30px" }}>
            Professional Service
          </span>
          <span style={style.promise} style={{ marginLeft: "-20px" }}>
            No Contracts
          </span>
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
            Brief description of company and services go here
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
          <Review />
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
};

export default Home;
