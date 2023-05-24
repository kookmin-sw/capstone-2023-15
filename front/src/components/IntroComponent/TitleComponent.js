import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const morphAnimation = keyframes`
  0% {
    filter: blur(2px);
    opacity: 0;
  }
  30% {
    filter: blur(0);
    opacity: 1;
  }
  70% {
    filter: blur(0);
    opacity: 1;
  }
  100% {
    filter: blur(2px);
    opacity: 0;
  }
`;

const BlurryText = styled.span`
  display: inline-block;
  position: relative;
  animation: ${morphAnimation} 3s infinite;
  transition: 0.5s;
  transition-timing-function: linear;
`;

const TitleComponent = () => {
  const [currentText, setCurrentText] = useState('Three F');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentText(prevText => (prevText === 'Three F' ? 'Find Fake nFt' : 'Three F'));
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <CSSTransition in={currentText === 'Three F'} appear={true} timeout={1600} classNames="fade">
        <BlurryText>{currentText}</BlurryText>
      </CSSTransition>
    </div>
  );
};

export default TitleComponent;