import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/users/actions";
import { getCurrentUser } from "../../store/users/selectors";

// Components
import TrackGrid from "../components/TrackGrid";
import UserHero from "../components/UserHero";
import UserNav from "../components/UserNav";

const UserPage = ({ match: { params } }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => ({
    user: getCurrentUser(state),
  }));

  useEffect(() => {
    const load = ({ id, resource }) => {
      dispatch(userActions.loadUser(id));
      if (resource === "likes") {
        dispatch(userActions.loadUserLikes(id));
      } else {
        dispatch(userActions.loadUserTracks(id));
      }
    };

    load(params);
  }, [dispatch, params]);

  if (!user) {
    return null;
  }

  return (
    <>
      <UserHero {...{ user }} />
      <UserNav {...{ user }} />
      <section className="container">
        <TrackGrid />
      </section>
    </>
  );
};

UserPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      resource: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default UserPage;
