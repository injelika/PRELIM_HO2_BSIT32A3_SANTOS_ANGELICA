import React from "react";

const Header = () => {
  return (
    <header className="custom-header">
      <div className="container">
        <h1>Santos, Angelica S.</h1>
        <p>
          <b>
            Year Level: 3rd Year | Bachelor of Science in Information Technology
          </b>
        </p>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
