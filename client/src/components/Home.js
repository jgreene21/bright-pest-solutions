import React from "react";
import {
  Image,
  Form,
  Header,
  Grid,
  Segment,
  Card,
  Icon,
} from "semantic-ui-react";
import House from "../images/home.jpg";
import Pet from "../images/Pet.png";
import SmallLogo from "../images/SmallLogo.png";
import Eco from "../images/Eco.png";
import Facebook from "../images/facebook.jpg";
import Instagram from "../images/instagram.png";
import Twitter from "../images/twitter.png";

class Home extends React.Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <div className="content" style={{ marginTop: "50px" }}>
        <Grid stackable columns={2}>
          <Grid.Column width={12}>
            <Image src={House} />
          </Grid.Column>
          <Grid.Column width={4}>
            <Form className="yellow-muted" style={{ padding: "35px" }}>
              <Header style={style.form}>How May We Help You?</Header>
              <br />
              <Form.Field >
                <label style={{fontFamily: "Poppins", fontWeight: "normal", fontSize: "13px", lineHeight: "19px",}}>Name:</label>
                <input placeholder="" />
              </Form.Field>
              <Form.Field>
                <label style={{fontFamily: "Poppins", fontWeight: "normal", fontSize: "13px", lineHeight: "19px",}}>Email:</label>
                <input placeholder="" />
              </Form.Field>
              <Form.Field >
                <label style={{fontFamily: "Poppins", fontWeight: "normal", fontSize: "13px", lineHeight: "19px",}}>Phone:</label>
                <input placeholder="" />
              </Form.Field>
              <Form.Group inline >
                <label style={{fontFamily: "Poppins", fontWeight: "normal", fontSize: "13px", lineHeight: "19px",}}>Preference:</label>
                <Form.Radio style={{fontFamily: "Poppins", fontWeight: "normal", fontSize: "13px", lineHeight: "19px",}}
                  label="email"
                  value="email"
                  checked={value === "email"}
                  onChange={this.handleChange}
                />
                <Form.Radio style={{fontFamily: "Poppins", fontWeight: "normal", fontSize: "13px", lineHeight: "19px",}}
                  label ="phone"
                  value="phone"
                  checked={value === "phone"}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Field>
                <label style={{fontFamily: "Poppins", fontWeight: "normal", fontSize: "13px", lineHeight: "19px",}}>Message:</label>
              </Form.Field>
              <Form.TextArea style={{height: "300px"}}>
                </Form.TextArea>
            </Form>
          </Grid.Column>
        </Grid>
        <br />
        <div className="container">
          <Image src={Pet} /> <Image src={SmallLogo} /> <Image src={Eco} />
        </div>
        <div className="container">
          <span style={style.promise}>Pet/Kid Friendly</span>
          <span style={style.promise}>Professional Service</span>
          <span style={style.promise}>Eco Friendly</span>
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
          <Segment className="bugs">Customers Love Us! Bugs Hate Us!</Segment>
        </div>
        <div
          className="container"
          style={{ marginTop: "-75px", marginBottom: "150px" }}
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
        <div className="container2" style={{ marginTop: "-100px" }}>
          <span style={{ marginRight: "5px" }}>
            <Image
              src={Facebook}
              size="mini"
              style={{ height: "35px", width: "55px" }}
            />
          </span>
          <span style={{ marginRight: "10px" }}>
            <Image src={Instagram} size="mini" />
          </span>
          <span>
            <Image src={Twitter} size="mini" />
          </span>
        </div>
        <p style={style.social}>
          lets be social
        </p>
      </div>
    );
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
  field: {
    form: {
      fontFamily: "Poppins !important",
      fontWeight: "normal",
      fontSize: "13px",
      lineHeight: "19px",
    },
  },
  promise: {
    fontFamily: "Poppins",
    fontWeight: 300,
    fontSize: "13px",
    lineHeight: "18px",
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
  social: {
    fontFamily: "Poppins",
    fontWeight: 300,
    fontSize: "10px",
    lineHeight: "13px",
    textAlign: "center", 
    marginTop: "10px",
    marginBottom: "50px"
  }
};

export default Home;
