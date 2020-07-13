import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Link, withRouter } from "react-router-dom";
import { Image, Container, Menu } from "semantic-ui-react";
import Logo from "../images/LargeLogo.jpg";
import Header from "../images/Header.svg";
import styled from "styled-components";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <Container style={{ marginBottom: "-30px" }}>
          <div className="contact">
            <Link to="/" className= "hvr-grow-shadow">
              <Bright as={Image} src={Logo} />
            </Link>
            <Contact>
              <p style={style.call}>Call Now</p>
              <p style={style.number}>1-800-BYE-PEST</p>
            </Contact>
          </div>
        </Container>
        <div className="menu-container">
          <YellowHeader as={Image} src={Header} />
          <Menu borderless style={{ border: "none", boxShadow: "none" }}>
            <Position as={Menu.Menu} position="right">
              <Link to="/" className= "hvr-grow-shadow">
                <NavItems as={Menu.Item} style={style.menu}>
                  Home
                </NavItems>
              </Link>
              <Link to="/oursolution" className= "hvr-grow-shadow">
                <NavItems as={Menu.Item} style={style.menu}>
                  Our Solution
                </NavItems>
              </Link>
              <Link to="/contact" className= "hvr-grow-shadow">
                <NavItems as={Menu.Item} style={style.menu}>
                  Contact Us
                </NavItems>
              </Link>
            </Position>
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

const Bright = styled.div`
   {
    height: 150px;
    width: 150px;
    @media (max-width: 1000px) {
      height: 100px;
      width: 100px;
    }
  }
`;
const Contact = styled.div`
   {
    font-size: 18px;
    margin-top: 40px;
    margin-right: 50px;
    @media (max-width: 1000px) {
      font-size: 14px;
      margin-top: 30px;
      margin-right: 30px;
    }
  }
`;
const YellowHeader = styled.div`
   {
    margin-left: 70px;
    @media (max-width: 1000px) {
      margin-left: 10px;
      margin-top: 20px;
    }
  }
`;
const NavItems = styled.div`
   {
    font-size: 14px;
    padding: 40px;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 20px;
    }
  }
`;
const Position = styled.div`
   {
    position: absolute;
    right: 140px;
    bottom: 55px;
    @media (max-width: 1000px) {
      position: absolute;
      right: 40px;
      bottom: 45px;
    }
  }
`;

const style = {
  call: {
    fontFamily: "Poppins",
    fontWeight: 600,
  },
  number: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "27px",
    marginTop: "-10px",
  },
  menu: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "21px",
    color: "white",
  },
};

export default withRouter(ConnectedNavbar);
