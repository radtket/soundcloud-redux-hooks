import styled from "styled-components";

const StyledPlaylistCard = styled.div`
  display: flex;
  margin-bottom: 64px;

  > figure {
    width: 33.33333333%;

    img {
      margin: 0 auto;
      padding-bottom: 15px;
      max-width: 320px;
    }

    figcaption {
      text-align: center;

      h1 {
        font-size: 24px;
        letter-spacing: -0.005em;
        color: #fff;
        overflow-wrap: break-word;
      }

      a {
        color: #fff;
        opacity: 0.6;
      }
    }
  }

  .playlist {
    width: 66%;
  }

  .tracks {
    display: flex;
    flex-flow: column wrap;
    margin-bottom: 15px;

    .track {
      border-top: 1px solid #373737;
      height: 42px;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      cursor: pointer;

      &:hover {
        background: #373737;
      }

      &:last-child {
        border-bottom: 1px solid #373737;
      }
    }

    .track__number {
      margin-left: 10px;
      color: #aaaaaa;
      width: 12px;
    }

    .track__added {
      margin-left: 30px;
      color: #c8c8c8;

      .added {
        color: #c8c8c8;
      }

      .not-added {
        color: #aaaaaa;
      }
    }

    .track__title {
      width: 45%;
      margin-left: 30px;
      color: $white;
    }

    .track__plays {
      color: #aaaaaa;
      margin-left: auto;
      padding-right: 10px;
    }

    .track__length {
      margin-left: auto;
      color: #aaaaaa;
    }

    .track__art img {
      width: 42px;
      height: 42px;
    }

    .track__explicit .label {
      border: 1px;
      border-style: solid;
      border-color: #373737;
      color: #373737;
      text-transform: uppercase;
    }
  }

  @media (max-width: 1200px) {
    .tracks {
      .track__title {
        width: auto !important;
      }

      .track__explicit {
        display: none;
      }

      .track__popularity {
        display: none;
      }
    }
  }
`;

export default StyledPlaylistCard;
