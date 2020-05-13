import React from 'react';
import styled, { keyframes } from 'styled-components';

function Particle({ distance, angle, children }) {
  const convertDegreesToRadians = (angle) => (angle * Math.PI) / 180;
  const angleInRads = convertDegreesToRadians(angle);

  const x = Math.cos(angleInRads) * distance;
  const y = Math.sin(angleInRads) * distance;

  const blast = (x, y) => keyframes`
    0% {
    transform: translate(0px, 0px);
    }   
    100% {
    transform: translate(${x}px, ${y}px);
    }
`;
  const fade = keyframes`
    0% {
        opacity: 1;
    }
    80% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
    `;

  const Wrapper = styled.div`
    @media (prefers-reduced-motion: no-preference) {
      animation: ${(props) => blast(props.x, props.y)} 500ms ease-in,
        ${fade} 1000ms forwards;
    }
  `;
  return (
    <Wrapper x={x} y={y}>
      {children}
    </Wrapper>
  );
}

export default Particle;
