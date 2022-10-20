import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-warning py-3">
      <div className=" container d-flex align-items-center justify-content-between">
        <h5 className="m-0 text-danger">Learn React Query</h5>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/query-products">
              RQ Products
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
