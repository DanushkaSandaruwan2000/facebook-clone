import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h2>Facebook Clone</h2>
      </div>
      <div className="header__right">
        <p>Profile</p>
        <p>Logout</p>
      </div>
    </div>
  );
}

export default Header;
