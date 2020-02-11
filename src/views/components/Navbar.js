import React from "react";
import { Link } from "react-router-dom";
import StyledNavbar from "../styles/Navbar";
import Logo from "./Logo";
import { GradientBorderButton } from "../styles/Buttons";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="nav-container">
        <Logo />
        <nav className="nav-primary">
          <GradientBorderButton to="/">Home</GradientBorderButton>
          <Link to="/">Browse</Link>
          <Link to="/">Library</Link>
        </nav>

        <nav className="nav-secondary">
          <Link className="active" to="/">
            Playlists
          </Link>
          <Link to="/">Albums</Link>
          <Link to="/">Artists</Link>
        </nav>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
