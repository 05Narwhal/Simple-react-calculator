import React from "react";

import './Footer.css';
import logo from '../../assets/images/logo.svg';

function Footer() {
  return (
    <footer style={{ display:'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img 
        src={logo} 
        alt="JL Studios logo" 
        style={{ width: '80px', height: '80px', marginRight: '20px' }}
      />
      <p>&copy; JL Studios <strong><em>designs</em></strong></p>
    </footer>
  );
}

export default Footer;