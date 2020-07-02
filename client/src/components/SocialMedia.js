import React from "react";
import {Image} from "semantic-ui-react";
import Facebook from "../images/facebook.jpg";
import Instagram from "../images/instagram.png";
import Twitter from "../images/twitter.png";
import styled from 'styled-components';

const SocialMedia = () => (
  <>
    <div className="container2" style={{ marginTop: "-100px" }}>
      <span style={{ marginRight: "5px" }}>
        <FB as={Image}
          src={Facebook}
        />
      </span>
      <span style={{ marginRight: "10px" }}>
        <Media as={Image} src={Instagram} />
      </span>
      <span>
        <Media as={Image} src={Twitter} />
      </span>
    </div>
    <p style={style.social}>lets be social</p>
  </>
);

const FB = styled.div`{
  height: 35px;
  width: 55px;
  @media(max-width: 1000px) {
    height: 28px;
    width: 44px;
    }
}
`
const Media = styled.div`{
  height: 35px;
  width: 35px;
  @media(max-width: 1000px) {
    height: 28px;
    width: 28px;
    }
}
`

const style = {
  social: {
    fontFamily: "Poppins",
    fontWeight: 300,
    fontSize: "10px",
    lineHeight: "13px",
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "50px",
  },
}

export default SocialMedia;
