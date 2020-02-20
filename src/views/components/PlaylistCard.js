import React from "react";
import { Link } from "react-router-dom";
import { trackImageUrl } from "../../store/tracks/utils";
import StyledPlaylistCard from "../styles/PlaylistCard";
import FormattedTime from "./FormattedTime";
import FormattedInteger from "./FormattedInteger";

const PlaylistCard = ({ playlist }) => {
  const { title, tracks, user, artworkUrl } = playlist;
  console.log({ playlist });
  return (
    <StyledPlaylistCard>
      <figure>
        <img
          alt={title}
          src={trackImageUrl({
            artworkUrl: artworkUrl || (tracks && tracks[0].artworkUrl),
            user,
          })}
        />
        <figcaption>
          <h1>{title}</h1>
          <Link className="ellipsis-one-line" to={`/users/${user.id}`}>
            {user.username}
          </Link>
        </figcaption>
      </figure>
      <div className="playlist">
        <ul className="tracks">
          {tracks.map((track, index) => {
            return (
              <li key={track.id} className="track">
                <div className="track__art">
                  <img
                    alt="When It's Dark Out"
                    src={track.artworkUrl || artworkUrl}
                  />
                </div>
                <div className="track__number">{index + 1}</div>
                <div className="track__added">
                  <i className="ion-checkmark-round added" />
                </div>
                <div className="track__title ellipsis-one-line">
                  {track.title}
                </div>
                <div className="track__length">
                  <FormattedTime unit="ms" value={track.duration} />
                </div>
                <div className="track__plays">
                  <FormattedInteger value={track.favoritingsCount} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledPlaylistCard>
  );
};

export default PlaylistCard;
