import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="d-flex container justify-content-between align-items-center">
        <div className="">
          <a className="navbar-brand" href="">
            Shop It
          </a>
        </div>
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item">
            <a className="nav-link text-white" aria-current="page" href="">
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white ms-3" href="">
              Contact Us
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link text-white ms-3 me-3" href="">
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
