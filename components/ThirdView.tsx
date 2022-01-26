import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: #468f57;
`;
const SubWrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  height: 50%;
  overflow: hidden;
  position: relative;
  border-bottom: 3px solid white;
`;
const mover = keyframes`
    100%{
    transform: translateX(1000px);
    }
`;

const Truck = () => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 31.445 31.445"
    css={css`
      position: absolute;
      width: 100px;
      height: 75px;
      left: 50%;
      margin-left: -75px;
      bottom: 0;
      margin-bottom: -15px;
      z-index: 5;
      fill: white;
    `}
  >
    <path
      d="M7.592,16.86c-1.77,0-3.203,1.434-3.203,3.204s1.434,3.204,3.203,3.204c1.768,0,3.203-1.434,3.203-3.204
			S9.36,16.86,7.592,16.86z M7.592,21.032c-0.532,0-0.968-0.434-0.968-0.967s0.436-0.967,0.968-0.967
			c0.531,0,0.966,0.434,0.966,0.967S8.124,21.032,7.592,21.032z"
    />
    <path
      d="M30.915,17.439l-0.524-4.262c-0.103-0.818-0.818-1.418-1.643-1.373L27.6,11.868l-3.564-3.211
			c-0.344-0.309-0.787-0.479-1.249-0.479l-7.241-0.001c-1.625,0-3.201,0.555-4.468,1.573l-4.04,3.246l-5.433,1.358
			c-0.698,0.174-1.188,0.802-1.188,1.521v1.566C0.187,17.44,0,17.626,0,17.856v2.071c0,0.295,0.239,0.534,0.534,0.534h3.067
			c-0.013-0.133-0.04-0.26-0.04-0.396c0-2.227,1.804-4.029,4.03-4.029s4.029,1.802,4.029,4.029c0,0.137-0.028,0.264-0.041,0.396
			h8.493c-0.012-0.133-0.039-0.26-0.039-0.396c0-2.227,1.804-4.029,4.029-4.029c2.227,0,4.028,1.802,4.028,4.029
			c0,0.137-0.026,0.264-0.04,0.396h2.861c0.295,0,0.533-0.239,0.533-0.534v-1.953C31.449,17.68,31.21,17.439,30.915,17.439z
			 M20.168,12.202l-10.102,0.511L12,11.158c1.051-0.845,2.357-1.305,3.706-1.305h4.462V12.202z M21.846,12.117V9.854h0.657
			c0.228,0,0.447,0.084,0.616,0.237l2.062,1.856L21.846,12.117z"
    />
    <path
      d="M24.064,16.86c-1.77,0-3.203,1.434-3.203,3.204s1.434,3.204,3.203,3.204c1.769,0,3.203-1.434,3.203-3.204
			S25.833,16.86,24.064,16.86z M24.064,21.032c-0.533,0-0.967-0.434-0.967-0.967s0.434-0.967,0.967-0.967
			c0.531,0,0.967,0.434,0.967,0.967S24.596,21.032,24.064,21.032z"
    />
  </svg>
);

const Tree = () => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 373.507 373.507"
    css={css`
      position: absolute;
      width: 50px;
      height: 50px;
      bottom: 0;
      path {
        fill: #377345;
      }
      animation: ${mover} 20s linear infinite;
    `}
  >
    <path
      d="M205.638,325.507h-39c-4.411,0-8,3.589-8,8v32c0,4.411,3.589,8,8,8h39c4.411,0,8-3.589,8-8v-32
		C213.638,329.096,210.049,325.507,205.638,325.507z"
    />
    <path
      d="M311.045,212.507h-3.904c3.683-6.952,5.826-15.18,5.826-24c0-23.467-15.11-42.784-34.311-44.813
		c4.428-7.434,6.825-16.33,6.825-25.687c0-11.812-3.806-22.899-10.717-31.222c-7.111-8.563-16.677-13.278-26.937-13.278h-7.335
		c1.723-5.399,2.66-11.145,2.66-17.107C243.153,25.301,217.852,0,186.753,0s-56.399,25.301-56.399,56.399
		c0,5.963,0.937,11.708,2.66,17.107h-7.335c-10.26,0-19.825,4.716-26.937,13.278c-6.911,8.322-10.717,19.41-10.717,31.222
		c0,9.357,2.397,18.253,6.825,25.687C75.65,145.723,60.54,165.04,60.54,188.507c0,8.82,2.142,17.048,5.826,24h-3.904
		c-20.762,0-37.653,20.411-37.653,45.5s16.892,45.5,37.653,45.5h248.584c20.762,0,37.653-20.411,37.653-45.5
		S331.807,212.507,311.045,212.507z"
    />
  </svg>
);

const Cloud = () => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 451.001 451.001"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    css={css`
      width: 75px;
      height: 75px;
      position: absolute;
      top: 50%;
      margin-top: -30px;

      fill: white;
      animation: ${mover} 30s linear infinite;
      transform-origin: 0px 800px;
    `}
  >
    <path
      d="M406.989,248.191c0.673-4.522,1.012-9.094,1.012-13.69c0-51.28-41.72-93-93-93c-7.281,0-14.453,0.836-21.444,2.494
			c-10.332-19.948-25.37-37.061-44.059-50.007c-23.126-16.02-50.27-24.487-78.497-24.487c-76.093,0-138,61.907-138,138
			c0,14.618,2.24,28.859,6.674,42.519C15.92,261.131,0,285.18,0,312.5c0,38.047,30.953,69,69,69h313.001c38.047,0,69-30.953,69-69
			C451.001,283.605,432.935,258.296,406.989,248.191z"
    />
  </svg>
);

const Mountain = () => (
  <svg
    width="238"
    height="105"
    viewBox="0 0 238 105"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    css={css`
      position: absolute;
      bottom: -2px;
      width: 100px;
      height: 50px;
      right: 0;
      path {
        fill: #377345;
      }
    `}
  >
    <path d="M119 18L191.263 104.5H0.737213L119 18Z" fill="#C4C4C4" />
    <path d="M165.557 0L238 105H47L165.557 0Z" fill="#C4C4C4" />
  </svg>
);

const ThirdView = () => {
  return (
    <Wrapper>
      <SubWrapper>
        <Cloud />
        <Truck />
        <Tree />
        <Mountain />
      </SubWrapper>
    </Wrapper>
  );
};

export default ThirdView;