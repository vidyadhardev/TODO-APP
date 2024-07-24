import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="p-3 bg-info">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-primary text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/home" className="nav-link px-4">Home</Link></li>
            <li><Link to="/feature" className="nav-link px-4">Features</Link></li>
            <li><Link to="/pricing" className="nav-link px-4">Pricing</Link></li>
            <li><Link to="/faqs" className="nav-link px-4">FAQs</Link></li>
            <li><Link to="/about" className="nav-link px-4">About</Link></li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
          </form>

          <div className="text-end">
            <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
            <Link to='/signup' className="btn btn-warning">Sign-up</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
