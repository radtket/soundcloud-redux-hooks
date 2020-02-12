import React from "react";
import PropTypes from "prop-types";
import StyledUserHero from "../styles/UserHero";
import { User } from "../../store/users/user";
import SocialMediaIcon from "./SocialMediaIcon";

const UserHero = ({
  user: { avatarUrl, bannerUrl, description, social, username },
}) => {
  return (
    <StyledUserHero {...{ visual: bannerUrl }}>
      <div className="container">
        <header className="entry-header">
          <div className="entry-header__inner">
            <img alt={username} src={avatarUrl.replace("large", "t300x300")} />
            <figcaption>
              <h1 className="entry-title">{username}</h1>
              <div className="entry-description">{description}</div>
              <div className="entry-meta">
                <button className="btn-play" type="button">
                  play
                </button>
                <button
                  className="btn-follow button-rounded "
                  data-action="follow"
                  type="button"
                >
                  <span className="follow">Follow</span>
                  <span className="following">Following</span>
                </button>
                <div className="user-links">
                  {social.map(item => {
                    const { id: key, service, title, url } = item;
                    return (
                      <a
                        {...{ key, title }}
                        aria-label={title || service}
                        href={url}
                        rel="external noopener noreferrer"
                        target="blank"
                      >
                        <span className="visuallyhidden">
                          {title || service}
                        </span>
                        <SocialMediaIcon {...{ service }} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </figcaption>
          </div>
        </header>
      </div>
    </StyledUserHero>
  );
};

UserHero.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
};

export default UserHero;
