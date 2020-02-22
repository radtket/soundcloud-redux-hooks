import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import StyledPageTitle from "../styles/PageTitle";

const PageTitle = ({ activePage, backgroundImage, style }) => {
  return (
    <StyledPageTitle
      style={{
        ...style,
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="page-heading__inner">
        <div className="container">
          <h1 className="page-heading__title">{activePage}</h1>
          <ol className="breadcrumb page-heading__breadcrumb">
            <li className="breadcrumb-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li aria-current="page" className="breadcrumb-item active">
              {activePage}
            </li>
          </ol>
        </div>
      </div>
    </StyledPageTitle>
  );
};

PageTitle.propTypes = {
  activePage: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  style: PropTypes.shape,
};

PageTitle.defaultProps = {
  style: {},
};

export default PageTitle;
