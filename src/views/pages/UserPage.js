import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/users/actions";
import { getCurrentUser } from "../../store/users/selectors";

import UserHero from "../components/UserHero";
import UserNav from "../components/UserNav";
import TrackGrid from "../components/TrackGrid";

const UserPage = ({ match: { params } }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => ({
    user: getCurrentUser(state),
  }));

  useEffect(() => {
    const loadUserLikes = e => dispatch(userActions.loadUserLikes(e));
    const loadUserTracks = e => dispatch(userActions.loadUserTracks(e));

    const loadUser = e => {
      dispatch(userActions.loadUser(e));
    };

    const load = ({ id, resource }) => {
      loadUser(id);

      if (resource === "likes") {
        loadUserLikes(id);
      } else {
        loadUserTracks(id);
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
