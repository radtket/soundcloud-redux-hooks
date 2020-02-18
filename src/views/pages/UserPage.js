import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadUser, loadUserTracks } from "../../store/users/actions";
import { getCurrentUser } from "../../store/users/selectors";

// Components
import TrackGrid from "../components/TrackGrid";
import UserHero from "../components/UserHero";
import UserNav from "../components/UserNav";
import { API_USERS_URL } from "../../store/constants";

const UserPage = () => {
  const { id, resource } = useParams();

  const dispatch = useDispatch();
  const { user } = useSelector(state => ({
    user: getCurrentUser(state),
  }));

  useEffect(() => {
    dispatch(loadUser(id));
    dispatch(
      loadUserTracks({
        id: `${id}/${resource}`,
        url: `${API_USERS_URL}/${id}/${resource}`,
      })
    );
  }, [dispatch, id, resource]);

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

export default UserPage;
