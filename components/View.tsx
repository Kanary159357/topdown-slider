import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ViewProps {
  color: string;
  selected?: boolean;
}

const Wrapper = styled.div<ViewProps>`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: ViewProps) => props.color};
`;

const SVGStyle = css`
  stroke-dasharray: 1268.2568359375px;
  stroke-dashoffset: -1268.2568359375px;
  color: white;
  animation: draw 1.8s cubic-bezier(0.21, 0.59, 0.75, 0.48) forwards;
  @keyframes draw {
    0% {
      stroke-dasharray: 0, 1268.2568359375;
    }
    100% {
      stroke-dasharray: 1268.2568359375, 0;
    }
  }
`;

const View = ({ color, selected }: { color: string; selected?: boolean }) => {
  return (
    <Wrapper color={color}>
      <svg
        width="259"
        height="290"
        viewBox="0 0 259 290"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        css={SVGStyle}
      >
        <path
          d="M44 113C59.2528 114.284 73.6542 113.676 88.6111 109.778C106.465 105.124 124.357 98.262 140.167 88.6667C149.327 83.1067 157.961 75.9035 160.889 65.1667C165.837 47.0235 159.304 24.7665 149.722 9.22222C146.918 4.67391 141.426 -2.04096 137.5 5.55556C127.505 24.8944 123.318 48.8725 117.833 69.6667C108.542 104.896 100.246 140.359 91.7222 175.778C85.9557 199.74 80.1113 223.723 72.2778 247.111C69.2969 256.011 66.2116 265.432 61.1667 273.444C54.4746 284.073 44.6551 268.826 39.6111 263.333C28.6376 251.384 16.8793 239.392 7.22223 226.333C2.13322 219.452 0.375254 212.008 3.83334 203.889C7.38621 195.547 14.7803 189.415 22.3333 184.778C41.6596 172.912 64.5967 166.826 86.6667 162.667C134.51 153.65 181.639 158.447 229.778 159C232.111 159.027 240.219 160.337 242.444 158.111C246.634 153.922 247.934 144.584 249 139.333C255.943 105.124 256.877 68.7148 257 33.8889C257.007 31.9386 258.611 14.0403 250.778 20.1111C242.611 26.4402 239.996 44.1422 237.444 52.7778C227.444 86.6221 218.051 120.692 209.333 154.889C198.601 196.991 187.367 239.634 179.222 282.333C178.589 285.653 177 291.329 177 285"
          stroke="white"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </Wrapper>
  );
};

export default View;
