import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrackGrid from "../../components/TrackGrid";
import { SESSION_TRACKLIST_ID } from "../../../store/constants";
import { loadUserTracks } from "../../../store/users/actions";

const LikesPage = () => {
  const dispatch = useDispatch();

  const oauthToken = useSelector(state => state.session.oauthToken);

  useEffect(() => {
    oauthToken &&
      dispatch(
        loadUserTracks({
          id: SESSION_TRACKLIST_ID,
          resource: "likes",
          url: `me/favorites`,
          oauthToken,
        })
      );
  }, [dispatch, oauthToken]);

  return (
    <>
      <h1>Likess Page</h1>
      <section className="container">
        <TrackGrid />
      </section>
    </>
  );
};

export default LikesPage;
