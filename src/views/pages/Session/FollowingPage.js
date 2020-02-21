import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SESSION_FOLLOWINGS_TRACKLIST_ID,
  API_SESSION_FOLLOWINGS_URL,
} from "../../../store/constants";
import { getOauthToken } from "../../../store/session/selectors";
import FollowingsGrid from "../../components/FollowingsGrid";
import { loadUserFollowings } from "../../../store/followings/actions";

const FollowingPage = () => {
  const dispatch = useDispatch();
  const oauthToken = useSelector(getOauthToken);

  useEffect(() => {
    oauthToken &&
      dispatch(
        loadUserFollowings({
          id: SESSION_FOLLOWINGS_TRACKLIST_ID,
          url: API_SESSION_FOLLOWINGS_URL,
          oauthToken,
        })
      );
  }, [dispatch, oauthToken]);

  return (
    <>
      <h1>Following Page</h1>
      <section className="container">
        <FollowingsGrid />
      </section>
    </>
  );
};

export default FollowingPage;
