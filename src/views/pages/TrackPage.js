import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Components
import { size } from "polished";
import { getTrackById } from "../../store/tracks/selectors";
import { loadSingleTrack } from "../../store/tracks/actions";
import WaveformTimeline from "../components/WaveformTimeline";
import { playSelectedTrack } from "../../store/player/actions";
import { getPlayerTimes } from "../../store/player/selectors";
import { CLIENT_ID_PARAM } from "../../store/constants";

const StyledTrackPage = styled.div`
  margin-top: 200px;

  .user-comments {
    display: flex;
  }

  .card-container {
    flex: 1 0 0;
    overflow-x: hidden;
    transform: scale(1);
    transition: transform 0.2s;
    position: relative;

    &.active,
    &:hover {
      flex: 0 0 auto;
      transform: scale(2);
      z-index: 1;
    }

    &:last-child {
      flex: 0 0 auto;
    }
  }

  .card {
    ${size("20px")};
  }
`;

const TrackPage = () => {
  const [data, setData] = useState(null);
  const { trackId } = useParams();
  const dispatch = useDispatch();
  const { track, times } = useSelector(state => ({
    times: getPlayerTimes(state),
    track: getTrackById(state, trackId),
  }));

  useEffect(() => {
    dispatch(loadSingleTrack(trackId));
    const init = () => {
      fetch(
        `https://api.soundcloud.com/tracks/17602302/comments?${CLIENT_ID_PARAM}`
      )
        .then(res => res.json())
        .then(json =>
          setData(
            json
              .sort((a, b) => a.timestamp - b.timestamp)
              .reduce((all, one) => {
                const unixTimestamp = Math.floor(one.timestamp / 1000);

                if (one.body && one.body !== "") {
                  return {
                    ...all,
                    [unixTimestamp]: {
                      ...one,
                      unixTimestamp,
                    },
                  };
                }

                return all;
              }, {})
          )
        );
    };

    init();
  }, [dispatch, trackId]);

  if (!track || !data) {
    return null;
  }

  const active = data && data[Math.floor(times.currentTime)];

  console.log({ data, track, times, active });

  return (
    <StyledTrackPage>
      <h1>Track Page</h1>
      <div className="container">
        <WaveformTimeline displayProgress url={track.waveformUrl} />
        <button
          onClick={() => dispatch(playSelectedTrack({ trackId: track.id }))}
          type="button"
        >
          PLAY
        </button>
        <div className="user-comments">
          {Object.entries(data).map(([key, item]) => {
            return (
              <div
                {...{ key }}
                className={`card-container ${
                  item.id === (active && active.id) ? "active" : ""
                }`}
              >
                <div
                  className="card"
                  style={{
                    backgroundImage: `url("${item.user.avatar_url}")`,
                  }}
                />
              </div>
              // <>
              //   <div
              //     key={item.id + key}
              //     className={`commentPopover__avatar sc-artwork ${
              //       item.id === active.id ? "active" : ""
              //     }`}
              //     style={{
              //       width: "20px",
              //       height: "20px",
              //       // backgroundImage:
              //       //   'url("https://i1.sndcdn.com/avatars-000513278070-97533q-t20x20.jpg")',
              //       backgroundImage: `url("${item.user.avatar_url}")`,
              //       backgroundSize: "cover",
              //     }}
              //   />
              //   {/* {isActive && <p>{item.body}</p>} */}
              // </>
            );
          })}
        </div>
        {active && active.body && <h1>{active.body}</h1>}
      </div>
    </StyledTrackPage>
  );
};

export default TrackPage;
