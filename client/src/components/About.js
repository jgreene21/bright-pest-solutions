import React from "react";
import { Image, Container, Grid } from "semantic-ui-react";
import Pet from "../images/Pet.jpg";
import NoContract from "../images/NoContract.png";
import AntGif from "../images/ants.gif";
import Jeff from "../images/Jeff.png";
import SocialMedia from "./SocialMedia";

class About extends React.Component {
  render() {
    return (
      <Container>
        <Grid stackable columns={2}>
          <Grid.Column style={{ marginTop: "50px" }}>
            <h2 style={style.header}>AMAZINGLY EFFECTIVE</h2>
            <h4 style={style.subheader}>
              Immediate results. 5x longer-lasting.
            </h4>
          </Grid.Column>
          <Grid.Column>
            <Image src={AntGif} style={{marginRight: "20px"}} />
          </Grid.Column>
        </Grid>

        <p style={style.description}>
          The secret sauce is millions of microscopic capsules embedded in the
          formula, each containing the active ingredient. These adhere to the
          waxy cuticles of pests and release pesticide directly into bugs,
          maximizing its effectiveness. The capsules also protect the pesticide
          from rain and sun, making Pestie last 5-10x longer than other pest
          control solutions.
        </p>
        <Grid stackable columns={2}>
          <Grid.Column style={{ marginTop: "50px" }}>
            <h2 style={style.header}>WORRY-FREE</h2>
            <p style={style.description}>
              Safe around children and pets. You shouldn't have to use toxic
              chemicals to get rid of pests. Pestie's pro formula is derived
              from chrysanthemum flowers, and can be safely used around pets and
              children when used as directed. No more worrying about what's
              being sprayed around your home.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Image src={Pet} />
          </Grid.Column>
        </Grid>
        <Grid stackable columns={2}>
          <Grid.Column style={{ marginTop: "-120px" }}>
            <Image src={NoContract} size="large" />
          </Grid.Column>
          <Grid.Column>
            <h2 style={style.header}>NO MORE CONTRACTS</h2>
            <p style={style.description}>
              Long-term contracts are a thing of the past. If you don’t love
              Pestie you can cancel anytime. Just give us a call and get a full
              refund. No hassle. No fees.
            </p>
          </Grid.Column>
        </Grid>
        <Grid stackable columns={2} style={{marginBottom: "125px"}}>
          <Grid.Column>
            <h2 style={style.header}>MEET OUR TECHNICIAN</h2>
            <p style={style.description}>
              Jeff is a California native residing in beautiful Utah and
              attending the University of Utah where he’s majoring in business
              and entrepreneurship.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Image src= {Jeff} style={{marginTop: "-100px"}}/>
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
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "19px",
    lineHeight: "25px",
  },
  subheader: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "19px",
    lineHeight: "25px",
  },
  description: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "17px",
    lineHeight: "25px",
  },
};

export default About;
