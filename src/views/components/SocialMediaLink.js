import React from "react";
import PropTypes from "prop-types";
import SocialMediaIcon from "./SocialMediaIcon";

const SocialMediaLink = ({ service, title, url }) => {
  return (
    <a
      {...{ title }}
      aria-label={title || service}
      href={url}
      rel="external noopener noreferrer"
      target="blank"
    >
      <span className="visuallyhidden">{title || service}</span>
      <SocialMediaIcon {...{ service }} />
    </a>
  );
};

SocialMediaLink.propTypes = {
  service: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

SocialMediaLink.defaultProps = {
  service: null,
  title: null,
  url: null,
};

export default SocialMediaLink;
