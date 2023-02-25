import React from "react";
// import "./header.scss";
const Header = () => {
  return (
    <div>
      <header id="home" className="header">
        <div className="overlay" />
        <a className="header-content container">
          <h1 className="header-title">
            <span className="up">I am </span>
            <span className="down">Michael Anderson</span>
          </h1>
          <h2 className="header-subtitle">FRONTEND WEB DEVELOPER</h2>
          <button className="btn btn-primary">Hire me</button>
        </a>
      </header>
      <a className="header-content container"></a>
    </div>
  );
};

export default Header;
