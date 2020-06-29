import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <section className="tabs header">
      <div className="mobile-container">
        <div aria-label="mobile menu" className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="tabs-container">
          <Link className="tabs-container__tab" to="/">
            <span>Home</span>
          </Link>
          <Link className="tabs-container__tab" to="/bikes">
            <span>Bikes</span>
          </Link>

          <Link className="tabs-container__tab" to="/faqs">
            <span>FAQ</span>
          </Link>

          <Link className="tabs-container__tab" to="/about">
            <span>About us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Navigation;
