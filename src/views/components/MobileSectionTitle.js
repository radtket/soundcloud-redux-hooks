import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconChevronRight } from "./Icons";

const StyledMobileSectionTitle = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  dl {
    margin: 0;
  }

  dt {
    font-size: 20px;
  }

  dd {
    font-size: 14px;
    color: #99999f;
  }

  a {
    color: #99999f;

    span {
      font-size: 14px;
      margin-right: 10px;
    }

    svg {
      height: 12px;
      fill: #99999f;
    }
  }
`;

const MobileSectionTitle = ({ title, subtitle, to }) => {
  return (
    <StyledMobileSectionTitle>
      <dl>
        <dt>{title}</dt>
        {subtitle && <dd>{subtitle}</dd>}
      </dl>
      {to && (
        <Link {...{ to }}>
          <span>View All</span>
          <IconChevronRight />
        </Link>
      )}
    </StyledMobileSectionTitle>
  );
};

export default MobileSectionTitle;
