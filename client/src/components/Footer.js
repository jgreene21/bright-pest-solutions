import React from 'react';
import SmLogo from '../images/smlogo.png'
import { Link } from 'react-router-dom';
import {Image, Icon} from 'semantic-ui-react';

const Footer = () => (
  <div className="footer" align="right">
  <p style={window.innerWidth < 900 ? {fontSize:'2vw'}: {fontSize:'1vw'}}>
    <Icon name="copyright outline" fitted size={window.innerWidth < 900 ? 'tiny' : 'small'} /> Bright Pest Solutions LLC. All rights reserved.
    </p>
</div>
);

export default Footer; 