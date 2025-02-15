import React from "react";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <p>© 2025 by Santos, Angelica.</p>
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
    </footer>
  );
};

export default Footer;
