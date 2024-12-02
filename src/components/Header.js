import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="header bg-blue-500 text-white p-4">
      <h1 className="header-title text-3xl">{title}</h1>
    </header>
  );
};

export default Header;

