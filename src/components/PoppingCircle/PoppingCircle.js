import React from 'react';
import styled, { keyframes } from 'styled-components';

const PoppingCircle = ({size, color}) => {
    return (
        <Wrapper style={{width: size, height: size, backgroundColor: color }}/>
    );
};

const fade = keyframes`
    0% {
        opacity: 0%;
    }
    50% {
        opacity: 100%;
    }
    100% {
        opacity: 0%;
    }
`;

const expand = keyframes`
    0% {
        transform: scale(0.25);
    }
    100% {
        transform: scale(1);
    }
`

const Wrapper = styled.div`
    z-index: 1;
    border-radius: 50%;
    position: absolute;

    @media (prefers-reduced-motion: no-preference) {
        animation: ${fade} 500ms ease-in-out forwards,
          ${expand} 500ms ease-in-out forwards;
    }
`

export default PoppingCircle;