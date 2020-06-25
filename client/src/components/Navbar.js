import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Link, withRouter } from "react-router-dom";
import { Image, Container, Menu } from "semantic-ui-react";
import Logo from "../images/LargeLogo.jpg";
import styled from 'styled-components';

class Navbar extends React.Component {
  render() {
    return (
      <>
      <Container>
        <div className="contact">
        <Image src={Logo} size="small" as="a" href="/"/>
        <div style={{marginTop: "70px", marginRight: "40px"}}>
        <h3>Call Now
        <br/>1-800-BYE-PEST</h3>
        </div>
        </div>
        </Container>
        <StyledMenu as={Menu} borderless inverted  className="yellow">
          <Menu.Menu position="right">
          <Link to="/">
            <Menu.Item style={{marginRight: "30px"}}>Home</Menu.Item>
          </Link>
          <Link to="/oursolution">
            <Menu.Item style={{marginRight: "30px"}}>Our Solution</Menu.Item>
          </Link>
          <Link to="/contact">
            <Menu.Item style={{marginRight: "30px"}}>Contact Us</Menu.Item>
          </Link>
          </Menu.Menu>
        </StyledMenu>
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
};

const StyledMenu = styled.div` {
  position: relative;
  z-index: 1;
  display: flex;
  
  
  &:before,
  &:after {
    display: block;
    height: 75%;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
  }

  &:before {
    top: 0;
    transform: skewY(-1deg);
    transform-origin: 0% 0;
  }
  
  &:after {
    bottom: 0;
    transform: skewY(0deg);
    transform-origin: 100%;
  }
}
`;

export default withRouter(ConnectedNavbar);
