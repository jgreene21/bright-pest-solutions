import React from "react";
import { Image, Form, Header, Grid, Segment, Card , Icon} from "semantic-ui-react";
import House from "../images/home.jpg";
import Pet from "../images/Pet.png";
import SmallLogo from "../images/SmallLogo.png";
import Eco from "../images/Eco.png";

class Home extends React.Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <div className="content" style={{ marginTop: "50px"}}>
        <Grid stackable columns={2}>
          <Grid.Column width={12}>
            <Image src={House} />
          </Grid.Column>
          <Grid.Column width={4}>
            <Form
              className="yellow-muted"
              style={{ padding: "35px"}}>
              <Header>How May We Help You?</Header>
              <br/>
              <Form.Field>
                <label>Name:</label>
                <input placeholder="" />
              </Form.Field>
              <Form.Field>
                <label>Email:</label>
                <input placeholder="" />
              </Form.Field>
              <Form.Field>
                <label>Phone:</label>
                <input placeholder="" />
              </Form.Field>
              <Form.Group inline>
                <label>Preference:</label>
                <Form.Radio
                  label="email"
                  value="email"
                  checked={value === "email"}
                  onChange={this.handleChange}
                />
                <Form.Radio
                  label="phone"
                  value="phone"
                  checked={value === "phone"}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.TextArea label="Message:" style={{height: "300px"}}/>
            </Form>
          </Grid.Column>
        </Grid>
        <br />
        <div className="container">
          <Image src={Pet} /> <Image src={SmallLogo} /> <Image src={Eco} />
        </div>
        <div className="container">
          <span>Pet/Kid Friendly</span>
          <span>Professional Service</span>
          <span>Eco Friendly</span>
        </div>
        <Segment
          className="yellow-muted"
          style={{ padding: "20px", marginBottom: "100px" }}
        >
          <h3>Welcome to Bright Pest Solutions</h3>
          <br />
          <p>Brief description of company and services go here </p>
          <br />
        </Segment>
        <div style={{display: "flex", justifyContent: "center", marginTop: "-125px", marginBottom: "100px"}}>
        <Segment className='bugs'>Customers Love Us! Bugs Hate Us!</Segment>
        </div>
        <div className="container" style={{marginTop: "-75px", marginBottom: "150px"}}>
          <Card.Group itemsPerRow={3} >
            <Card className='review' >
              
          <Card.Content>
      <Card.Header style={{color: "white"}}><span style={{textAlign: "center"}}><Icon name="star" size="big"/><Icon name="star" size="big"/><Icon name="star" size="big"/><Icon name="star" size="big"/><Icon name="star" size="big"/></span>
      <br/>
      <br/>No more ants!</Card.Header>
      <Card.Description style={{color: "white"}}>
      Since Bright Pest Solutions sprayed my house a few months ago I haven’t seen anymore ants in my home, even with all the construction in my neighborhood. Such a relief. 
      </Card.Description>
      </Card.Content>
      <Card.Content style={{color: "white", textAlign: "right", border: "none"}}>
        - James T. (Saratoga Springs)
      </Card.Content>
      </Card>
      <Card className='review'>
          <Card.Content>
          <Card.Header style={{color: "white"}}><span style={{textAlign: "center"}}><Icon name="star" size="big"/><Icon name="star" size="big"/><Icon name="star" size="big"/><Icon name="star" size="big"/><Icon name="star" size="big"/></span>
      <br/>
      <br/>Peace of Mind!</Card.Header>
      <Card.Description style={{color: "white"}}> 
      Just so happy with Bright Pest Solutions results. I feel a great peace of mind knowing that I’m protecting my home from insects while keeping my children and pets safe from harsh chemicals.
      </Card.Description>
      </Card.Content>
      <Card.Content style={{color: "white", textAlign: "right", border: "none"}}>
        - Jane C. (Lehi)
      </Card.Content>
      </Card>
      <Card className='review'>
          <Card.Content>
          <Card.Header style={{color: "white"}}><span style={{textAlign: "center"}}><Icon name="star" size="big"/><Icon name="star" size="big"/><Icon name="star" size="big"/><Icon name="star" size="big"/><Icon name="star" size="big"/></span>
      <br/>
      <br/>We love Bright Pest Solutions!</Card.Header>
      <Card.Description style={{color: "white"}}>
      Thanks so much for your professional and friendly services. I’m so thrilled with the results and the process. Thank you. 
      </Card.Description>
      </Card.Content>
      <Card.Content style={{color: "white", textAlign: "right", border: "none"}}>
        - Mark L. (Sandy)
      </Card.Content>
      </Card>
          </Card.Group>
        </div>
      </div>
    );
  }
}

export default Home;
