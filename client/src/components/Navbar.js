import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Link, withRouter } from "react-router-dom";
import { Image, Container, Menu } from "semantic-ui-react";
import Logo from "../images/LargeLogo.jpg";
import Header from "../images/Header.svg";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <Container style={{marginBottom: "-30px"}}>
          <div className="contact">
            <Image src={Logo} size="small" as="a" href="/" />
            <div style={{ marginTop: "40px", marginRight: "60px" }}>
              <p style={style.call}>Call Now</p>
              <p style={style.number}>1-800-BYE-PEST</p>
            </div>
          </div>
        </Container>
        <div className="menu-container">
        <Image src={Header} style={{marginLeft: "70px"}}/>
        <Menu borderless style={{border: "none", boxShadow: "none"}}>
          <Menu.Menu position="right" style={{position: "absolute", right: "140px", bottom: "50px", color: "white"}}>
            <Link to="/">
              <Menu.Item className="nav" style={style.menu}>Home</Menu.Item>
            </Link>
            <Link to="/oursolution">
              <Menu.Item className="nav" style={style.menu}>
                Our Solution
              </Menu.Item>
            </Link>
            <Link to="/contact">
              <Menu.Item className="nav" style={style.menu}>Contact Us</Menu.Item>
            </Link>
          </Menu.Menu>
          </Menu>
          </div>
      </>
    );
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {(auth) => <Navbar {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}

const style = {
  call: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "18px",
  },
  number: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "27px",
    marginTop: "-10px"
  },
  menu: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    marginRight: "50px" 
  },
};

export default withRouter(ConnectedNavbar);
