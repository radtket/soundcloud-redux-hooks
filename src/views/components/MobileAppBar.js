import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  IconHome,
  IconHomeOutline,
  IconSearch,
  IconDiscover,
  IconSoundCloudAuth,
} from "./Icons";
import { StyledMobileAppBar } from "../styles/Navbar";

const MobileAppBar = () => {
  const { pathname } = useLocation();
  const isHomeActive = pathname === "/";
  return (
    <StyledMobileAppBar>
      <div>
        <NavLink to="/">
          {isHomeActive ? <IconHome /> : <IconHomeOutline />}
          <span>Home</span>
        </NavLink>
        <Link to="/">
          <IconSearch />
          <span>Search</span>
        </Link>
        <NavLink to="/genres">
          <IconDiscover />
          <span>Discover</span>
        </NavLink>
        <Link to="/">
          <IconSoundCloudAuth />
          <span>Login</span>
        </Link>
      </div>
    </StyledMobileAppBar>
  );
};

export default MobileAppBar;
