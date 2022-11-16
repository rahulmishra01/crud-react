import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="d-flex justify-content-center p-3 navbar-bg">
      <div className="row">
        <div style={{ padding: "5rem" }} className="justify-content-center">
          <NavLink
            style={{
              textDecoration: "none",
              padding: "1rem",
              marginRight: "2rem",
              color: "#fff",
              background: "red",
              borderRadius: "19px",
            }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              padding: "1rem",
              color: "#fff",
              background: "red",
              borderRadius: "19px",
            }}
            to="/register"
          >
            Register
          </NavLink>
          <NavLink
            style={{
              textDecoration: "none",
              padding: "1rem",
              color: "#fff",
              marginLeft: "2rem",
              background: "red",
              borderRadius: "19px",
            }}
            to="/edit"
          >
            Edit
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
