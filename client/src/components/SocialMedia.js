import React from "react";
import {Image} from "semantic-ui-react";
import Facebook from "../images/facebook.jpg";
import Instagram from "../images/instagram.png";
import Twitter from "../images/twitter.png";

const SocialMedia = () => (
  <>
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
    <p style={style.social}>lets be social</p>
  </>
);

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
