import React from "react";
import { Link } from "react-router-dom";
import StyledNavbar from "../styles/Navbar";
import Logo from "./Logo";
import { GradientBorderButton } from "../styles/Buttons";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="nav-container">
        <Link to="/">
          <Logo />
        </Link>
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
        <SearchBar />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
