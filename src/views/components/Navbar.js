import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import StyledNavbar from "../styles/Navbar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserAccountButton from "./UserAccountButton";
import { getSession } from "../../store/session/selectors";

const Navbar = () => {
  const { id } = useSelector(getSession);
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
        </nav>

        {id && (
          <nav className="nav-secondary">
            <NavLink to="/me/stream">Stream</NavLink>
            <NavLink to="/me/likes">Likes</NavLink>
            <NavLink to="/me/followings">Following</NavLink>
          </nav>
        )}

        <nav className="nav-search">
          <SearchBar />
          <UserAccountButton />
        </nav>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
