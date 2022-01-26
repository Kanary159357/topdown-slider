import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

const SVGStyle = css`
  text {
    color: white;
    font-family: 'Raleway', sans-serif;
    font-size: 6em;
    stroke-dasharray: 359px;

    animation: drawName 3s ease infinite;
    @keyframes drawName {
      0% {
        stroke-dashoffset: 359;
        stroke: white;
        stroke-width: 3px;
      }
      80% {
        fill: transparent;
      }
      99% {
        stroke: white;
        stroke-width: 3px;
      }
      100% {
        stroke-dashoffset: 0;
        fill: white;
      }
    }
  }
`;

const SecondView = () => {
  return (
    <Wrapper>
      <svg width="1000" height="525" viewBox="0 0 1000 525" css={SVGStyle}>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
          KANARY
        </text>
      </svg>
    </Wrapper>
  );
};

export default SecondView;
