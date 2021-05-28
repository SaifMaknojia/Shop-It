import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="d-flex container   overflow-scroll justify-content-between align-items-center">
        <div className="">
          <Link className="underline" to="/">
            <p className="navbar-brand fs-5 nav-item">Shop It</p>
          </Link>
        </div>
        <ul className="navbar-nav d-flex flex-row me-3">
          <Link className="underline" to="/">
            <li className="nav-item">
              <p className="nav-link text-white fs-5 ms-3" aria-current="page">
                Home
              </p>
            </li>
          </Link>
          <Link className="underline" to="/shop">
            <li className="nav-item">
              <p className="nav-link text-white fs-5 ms-3" aria-current="page">
                Shop
              </p>
            </li>
          </Link>

          <Link className="underline" to="/signin">
            <li className="nav-item ">
              <p className="nav-link fs-5 text-white ms-3 me-2">Sign In</p>
            </li>
          </Link>

          <Link className="underline" to="/cart">
            <li className="nav-item d-flex justify-content-between">
              <p className="nav-link text-white fs-5 ms-2">
                <span>
                  <FaShoppingCart className="me-1 pb-1" />
                </span>
                Cart
              </p>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
