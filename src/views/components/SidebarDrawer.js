import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { IconAlbum, IconComment } from "./Icons";
import { getSession } from "../../store/session/selectors";
import StyledSidebarDrawer from "../styles/SidebarDrawer";

const SidebarDrawer = () => {
  const { id } = useSelector(getSession);
  return (
    <StyledSidebarDrawer>
      <ul className="sidebarMenuInner">
        <li>
          <NavLink className="nav-item" exact to="/">
            <IconAlbum />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-item" to="/genres">
            <IconComment />
            <span>Genres</span>
          </NavLink>
        </li>
        {id && (
          <>
            <li>
              <NavLink to="/me/stream">
                <IconAlbum />
                <span>Stream</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/me/likes">
                <IconAlbum />
                <span>Likes</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/me/followings">
                <IconAlbum />
                <span>Following</span>
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </StyledSidebarDrawer>
  );
};

export default SidebarDrawer;
