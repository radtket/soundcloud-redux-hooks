import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { createSelector } from "reselect";
import StyledUserHero from "../styles/UserHero";
import { User } from "../../store/users/user";
import renderHTML from "../../utils/render-html";
import { getFollowings } from "../../store/session/selectors";
import { StyledButton } from "../styles/Buttons";
import UserHeroPlayButton from "./UserHeroPlayButton";
import { toggleFollowRequest } from "../../store/session/actions";
import SocialMediaLink from "./SocialMediaLink";
import BG_PLACEHOLDER from "../../assets/svg/bg-placeholder.svg";

const UserHero = ({
  user: { avatarUrl, bannerUrl, description, social, username, id },
}) => {
  const dispatch = useDispatch();
  const isFollowing = useSelector(
    createSelector(getFollowings, followings => Boolean(followings[id]))
  );

  return (
    <StyledUserHero
      style={{
        backgroundImage: `url(${bannerUrl || BG_PLACEHOLDER})`,
      }}
    >
      <div className="container">
        <header className="entry-header">
          <div className="entry-header__inner">
            <img alt={username} src={avatarUrl.replace("large", "t300x300")} />
            <figcaption>
              <h1 className="entry-title">{username}</h1>
              <div className="entry-description">
                {description && renderHTML(description)}
              </div>
              <div className="entry-meta">
                <UserHeroPlayButton />
                <StyledButton
                  aria-label={
                    isFollowing ? `Unfollow ${username}` : `Follow ${username}`
                  }
                  onClick={() => {
                    !isFollowing &&
                      dispatch(
                        toggleFollowRequest({ id, following: isFollowing })
                      );
                  }}
                  type="button"
                >
                  {isFollowing ? "Unfollow" : "Follow"}
                </StyledButton>
                <div className="user-links">
                  {social.map(item => (
                    <SocialMediaLink {...{ ...item, key: item.id }} />
                  ))}
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
