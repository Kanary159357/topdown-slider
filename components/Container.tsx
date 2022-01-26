import styled from '@emotion/styled';
import React, { useEffect, useRef, useState, WheelEvent } from 'react';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const ViewContainer = styled.div`
  position: fixed;
  display: block;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  transition: all 0.5s ease-in-out;
`;

const ViewController = styled.div`
  position: absolute;
  top: 50%;
  right: 18px;
`;
const ViewIndicator = styled.div<{ cur: boolean }>`
  background: white;
  opacity: ${props => (props.cur ? 0.8 : 0.3)};
  width: 10px;
  height: 10px;
  margin: 10px 0;
  border-radius: 50%;
  cursor: pointer;
`;

const Container = ({ children }: { children: React.ReactNode[] }) => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setAnimating] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const updater = (e: WheelEvent) => {
    if (!isAnimating) {
      let dir = e.deltaY;
      if (dir < 0) {
        if (index > 0) {
          setIndex(index - 1);
          setAnimating(true);
        }
      } else {
        if (index < children.length - 1) {
          setIndex(index + 1);
          setAnimating(true);
        }
      }
    }
  };
  useEffect(() => {
    if (ref && ref.current) {
      ref.current.style.transform = `translate3d(0,-${index * 100}%,0)`;
    }
  }, [index]);
  return (
    <Wrapper>
      <ViewContainer
        ref={ref}
        onWheel={updater}
        onTransitionEnd={() => setAnimating(false)}
      >
        {children}
      </ViewContainer>
      <ViewController>
        {children.map((_, i) => (
          <ViewIndicator
            onClick={() => setIndex(i)}
            cur={i === index}
            key={i}
          />
        ))}
      </ViewController>
    </Wrapper>
  );
};

export default Container;
