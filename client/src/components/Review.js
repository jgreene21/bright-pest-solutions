import React from "react";
import { Card, Icon } from "semantic-ui-react";
import StarRating from "./StarRating";

class Review extends React.Component {
  render() {
    return (
      <Card.Group centered itemsPerRow={3} style={{ margin: "15px"}}>
        <Card className="review">
          <Card.Content>
            <Card.Header style={style.title}>
              <div style={{ textAlign: "center" }}>
                {[...Array(5)].map((star) => {
                  return <Icon name="star" size="large" />;
                })}
              </div>
              <br />
              No more ants!
            </Card.Header>
            <br />
            <Card.Description style={{ color: "white" }}>
              Since Bright Pest Solutions sprayed my house a few months ago I
              haven’t seen anymore ants in my home, even with all the
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
              <div style={{ textAlign: "center" }}>
                {[...Array(5)].map((star) => {
                  return <Icon name="star" size="large" />;
                })}
              </div>
              <br />
              Peace of Mind!
            </Card.Header>
            <br />
            <Card.Description style={style.body}>
              Just so happy with Bright Pest Solutions results. I feel a great
              peace of mind knowing that I’m protecting my home from insects
              while keeping my children and pets safe from harsh chemicals.
            </Card.Description>
          </Card.Content>
          <Card.Content style={style.signature}>- Jane C. (Lehi)</Card.Content>
        </Card>
        <Card className="review">
          <Card.Content>
            <Card.Header style={style.title}>
              <div style={{ textAlign: "center" }}>
                <StarRating />
              </div>
              <br />
              We love Bright Pest Solutions!
            </Card.Header>
            <br />
            <Card.Description style={style.body}>
              Thanks so much for your professional and friendly services. I’m so
              thrilled with the results and the process. Thank you.
            </Card.Description>
          </Card.Content>
          <Card.Content style={style.signature}>- Mark L. (Sandy)</Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

const style = {
  title: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "19px",
    color: "#FFFFFF",
    textAlign: "center",
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

export default Review;
