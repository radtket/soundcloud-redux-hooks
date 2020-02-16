import React from "react";
import { NavLink, Link } from "react-router-dom";
import StyledNavbar from "../styles/Navbar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserAccountButton from "./UserAccountButton";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="nav-container">
        <nav className="nav-primary">
          <Link className="nav-logo" to="/">
            <Logo />
          </Link>
          <NavLink className="nav-item" exact to="/">
            Home
          </NavLink>
          <NavLink className="nav-item" to="/genres">
            Genres
          </NavLink>
          <NavLink className="nav-item" to="library">
            Library
          </NavLink>
        </nav>

        <nav className="nav-secondary">
          <Link className="active" to="/">
            Stream
          </Link>
          <Link to="/">Likes</Link>
        </nav>
        <nav className="nav-search">
          <SearchBar />
          <UserAccountButton />
        </nav>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
