import React from "react";
import { Image, Container, Grid } from "semantic-ui-react";
import Pet from "../images/Pet.jpg";
import NoContract from "../images/NoContract.png";
import AntGif from "../images/ants.gif";
import Jeff from "../images/Jeff.png";
import SocialMedia from "./SocialMedia";
import styled from "styled-components";

class About extends React.Component {
  render() {
    return (
      <Container>
        <Grid columns={2}>
          <Grid.Column>
            <Title style={style.header}>AMAZINGLY EFFECTIVE</Title>
            <SubTitle style={style.subheader}>
              Immediate results. 5x longer-lasting.
            </SubTitle>
          </Grid.Column>
          <Grid.Column >
            <span style={{display: "flex"}}><Ants as={Image} src={AntGif} /><Ants as={Image} src={AntGif} /></span>
          </Grid.Column>
        </Grid>

        <Body style={style.description}>
          The secret sauce is millions of microscopic capsules embedded in the
          formula, each containing the active ingredient. These adhere to the
          waxy cuticles of pests and release pesticide directly into bugs,
          maximizing its effectiveness. The capsules also protect the pesticide
          from rain and sun, making Pestie last 5-10x longer than other pest
          control solutions.
        </Body>
        <GridHolder>
        <Grid columns={2}>
          <Grid.Column >
            <Title style={style.header}>WORRY-FREE</Title>
            <br/>
            <Body style={style.description}>
              Safe around children and pets. You shouldn't have to use toxic
              chemicals to get rid of pests. Pestie's pro formula is derived
              from chrysanthemum flowers, and can be safely used around pets and
              children when used as directed. No more worrying about what's
              being sprayed around your home.
            </Body>
          </Grid.Column>
          <Grid.Column>
            <Image src={Pet} />
          </Grid.Column>
        </Grid>
        </GridHolder>
        <Grid columns={2}>
          <Grid.Column >
            <ImageHolder as={Image} src={NoContract} size='large' />
          </Grid.Column>
          <Grid.Column>
            <Title style={style.header}>NO MORE CONTRACTS</Title>
            <br/>
            <Body style={style.description}>
              Long-term contracts are a thing of the past. If you don’t love
              Pestie you can cancel anytime. Just give us a call and get a full
              refund. No hassle. No fees.
            </Body>
          </Grid.Column>
        </Grid>
        <Grid columns={2} style={{marginBottom: "125px"}}>
          <Grid.Column>
            <Title style={style.header}>MEET OUR TECHNICIAN</Title>
            <br/>
            <Body style={style.description}>
              Jeff is a California native residing in beautiful Utah and
              attending the University of Utah where he’s majoring in business
              and entrepreneurship.
            </Body>
          </Grid.Column>
          <Grid.Column>
            <ImageHolder as={Image} src= {Jeff}/>
          </Grid.Column>
        </Grid>
        <SocialMedia />
      </Container>
    );
  }
}

const Title = styled.div`{
    font-size: 19px;
  @media(max-width: 900px) {
    font-size: 15px;
    }
}
`
const SubTitle = styled.div`{
  font-size: 17px;
@media(max-width: 1200px) {
  font-size: 15px;
  margin-bottom: 10px;
  }
}
`
const Body = styled.div`{
  font-size: 17px;
@media(max-width: 900px) {
  font-size: 13px;
  }
}
`

const ImageHolder = styled.div`{
  margin-top: -120px;
  @media(max-width: 1000px) {
    margin-top: 10px;
    }
}
`
const Ants = styled.div`{
  height: 75px;
  width: 300px;
  @media(max-width: 1000px) {
    height: 56px;
    width: 225px;
    }
}
`
const GridHolder = styled.div`{
  margin-top: 50px;
  @media(max-width: 1000px) {
    margin-top: 10px;
    }
}
`

const style = {
  header: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "25px",
  },
  subheader: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "25px",
  },
  description: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "25px",
  },
};

export default About;
