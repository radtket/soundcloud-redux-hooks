import React from "react";
import { Link } from "react-router-dom";
import StyledNavbar from "../styles/Navbar";
import Logo from "./Logo";
import { GradientBorderButton } from "../styles/Buttons";
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
        <nav className="nav-search">
          <SearchBar />
          <UserAccountButton />
        </nav>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
