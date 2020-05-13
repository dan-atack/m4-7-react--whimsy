import React from 'react';
import styled from 'styled-components';
import Particle from '../Particle';

function ConfettiPiece({ color, angle, distance }) {
  return (
    <CenteredInsideParent>
      <Particle angle={angle} distance={distance}>
        <Circle color={color}></Circle>
      </Particle>
    </CenteredInsideParent>
  );
}

const Circle = styled.div`
  z-index: 10;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${(props) => `${props.color}`};
`;

const CenteredInsideParent = styled.div`
  position: absolute;
  top: 14px;
  left: 14px;
`;

export default ConfettiPiece;
