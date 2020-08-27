import React from "react";
import { Image } from "semantic-ui-react";
import Facebook from "../images/Facebook.svg";
import Instagram from "../images/Instagram.svg";
import Twitter from "../images/Twitter.svg";

const SocialMedia = () => (
  <>
    <div className="container2" style={{ marginTop: "-100px", marginBottom: "50px" }}>
      <Image.Group size="mini">
        <a
          href="https://www.instagram.com/jeffgreene23/"
          className="hvr-grow-shadow"
        >
          <Image src={Instagram} />
        </a>
        <Image src={Facebook} />
        <Image src={Twitter} />
        </Image.Group>
    </div>
  </>
);

export default SocialMedia;
