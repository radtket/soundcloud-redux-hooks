import styled from "styled-components";
import { padding } from "polished";

export const PageTopBackgroundAccent = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 33vh;
  opacity: 0.72;
  background: linear-gradient(to bottom, transparent, #141625);
  transition: all 0.3s ease-in-out;
`;

export const Section = styled.section`
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const PageSection = styled(Section)`
  ${padding("60px", 0)}

  @media (min-width: 480px) {
    ${padding("80px", null)}
  }

  @media (min-width: 768px) {
    ${padding("120px", null)}
  }

  @media (min-width: 992px) {
    ${padding("140px", null)}
  }
`;

export const SmallSection = styled(Section)`
  ${padding("30px", 0)}

  @media (min-width: 480px) {
    ${padding("50px", null)}
  }

  @media (min-width: 768px) {
    ${padding("70px", null)}
  }
`;
