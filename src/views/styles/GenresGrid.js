import styled from "styled-components";
import { Link } from "react-router-dom";

export const GenreCard = styled(Link)`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
  display: block;
  height: 200px;
  overflow: hidden;
  position: relative;
  width: 100%;

  .blur {
    backdrop-filter: blur(5px);
    border-radius: 7px;
    bottom: 17px;
    height: 25px;
    overflow: hidden;
    position: absolute;
    right: 13px;
    width: 79px;
  }

  .genre-title {
    background: rgba(255, 255, 255, 0.11);
    border-radius: 7px;
    bottom: 17px;
    box-shadow: 0 11px 22px 0 rgba(0, 0, 0, 0.38);
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    height: 26px;
    letter-spacing: 0.4px;
    line-height: 2.4;
    overflow: hidden;
    padding: 0 10.82px;
    position: absolute;
    right: 13px;
    text-align: center;
    text-transform: uppercase;
  }
`;
