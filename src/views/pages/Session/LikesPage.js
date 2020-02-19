import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TrackGrid from "../../components/TrackGrid";
import {
  API_SESSION_LIKES_URL,
  SESSION_LIKES_TRACKLIST_ID,
} from "../../../store/constants";
import { loadUserTracks } from "../../../store/users/actions";
import { getOauthToken } from "../../../store/session/selectors";

const LikesPage = () => {
  const dispatch = useDispatch();
  const oauthToken = useSelector(getOauthToken);

  useEffect(() => {
    oauthToken &&
      dispatch(
        loadUserTracks({
          id: SESSION_LIKES_TRACKLIST_ID,
          url: API_SESSION_LIKES_URL,
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
