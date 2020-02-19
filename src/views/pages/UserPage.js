import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadUser, loadUserTracks } from "../../store/users/actions";
import { getCurrentUser } from "../../store/users/selectors";

// Components
import TrackGrid from "../components/TrackGrid";
import UserHero from "../components/UserHero";
import UserNav from "../components/UserNav";
import { API_USERS_URL } from "../../store/constants";
import FollowingsGrid from "../components/FollowingsGrid";
import { loadUserFollowings } from "../../store/followings/actions";

const UserPage = () => {
  const { id, resource } = useParams();
  const [isUser, setIsUser] = useState(
    resource !== "tracks" || resource !== "favorites"
  );

  const dispatch = useDispatch();
  const { user } = useSelector(state => ({
    user: getCurrentUser(state),
  }));

  useEffect(() => {
    dispatch(loadUser(id));
    const isTracks = resource === "tracks" || resource === "favorites";
    setIsUser(!isTracks);

    const config = {
      id: `${id}/${resource}`,
      url: `${API_USERS_URL}/${id}/${resource}`,
    };

    dispatch(isTracks ? loadUserTracks(config) : loadUserFollowings(config));
  }, [dispatch, id, resource]);

  if (!user) {
    return null;
  }

  return (
    <>
      <UserHero {...{ user }} />
      <UserNav {...{ user }} />
      <section className="container">
        {isUser ? <FollowingsGrid /> : <TrackGrid />}
      </section>
    </>
  );
};

export default UserPage;
