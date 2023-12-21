import React from 'react';

const Header = ({ isAuthenticated }) => {
  const linkStyle = {
    float: 'left',
    display: 'block',
    color: '#f2f2f2',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
  };

  const buttonStyle = {
    float: 'right',
    display: 'block',
    color: '#f2f2f2',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
  };

  return (
    <nav style={{ backgroundColor: '#333', overflow: 'hidden' }}>
      <a href="#" style={linkStyle}>Home</a>
      <a href="#" style={linkStyle}>About</a>
      <a href="#" style={linkStyle}>Contact</a>

      {!isAuthenticated ? (
        <>
          <a href="#" style={buttonStyle}>Login</a>
          <a href="#" style={buttonStyle}>Sign Up</a>
        </>
      ) : (
        <a href="#" style={buttonStyle}>Logout</a>
      )}
    </nav>
  );
};

export default Header;
