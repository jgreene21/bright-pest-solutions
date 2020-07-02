import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const Footer = () => (
  <div className="footer" align="right">
  <StyledP style={window.innerWidth < 900 ? {fontSize:'2vw'}: {fontSize:'1vw'}} style={style.footer}>
    <Icon name="copyright outline" fitted size={window.innerWidth < 900 ? 'small' : ''} /> Bright Pest Solutions LLC. All rights reserved.
    </StyledP>
</div>
);

const StyledP = styled.p`{
  font-size: 15px;
  @media(max-width: 900px) {
    font-size: 12px; 
    }
}
`
const style= {
  footer: {
    fontFamily: "Poppins",
    fontWeight: 500,
    lineHeight: "15px",
    color: "#F5CE42",
  }
}

export default Footer; 