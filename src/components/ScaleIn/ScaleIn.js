import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from 'react-spring';

function ScaleIn({ children }) {
  const style = useSpring({
    transform: 'scale(1)',
    from: {
      transform: 'scale(0)',
    },
    config: {
      tension: 150,
      friction: 10,
    },
  });
  return <animated.div style={style}>{children}</animated.div>;
}

export default ScaleIn;
