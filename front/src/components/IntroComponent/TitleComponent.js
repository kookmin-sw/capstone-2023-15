import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";


const morphTime = 1;
const cooldownTime = 0.25;

const texts = [
  "If",
  "You",
  "Like",
  "It",
  "Please",
  "Give",
  "a Love",
  ":)",
];

const getNextTextIndex = (textIndex) => (textIndex + 1) % texts.length;

const getNextTextStyles = (fraction) => ({
  blur: Math.min(8 / fraction - 8, 100),
  opacity: Math.pow(fraction, 0.4) * 100,
});

const getCurrentTextStyles = (fraction) => {
  const inverseFraction = 1 - fraction;
  return {
    blur: Math.min(8 / inverseFraction - 8, 100),
    opacity: Math.pow(inverseFraction, 0.4) * 100,
  };
};

const MorphingText = () => {
  const [textIndex, setTextIndex] = useState(texts.length - 1);
  const [fraction, setFraction] = useState(0);
  const [cooldown, setCooldown] = useState(cooldownTime);

  const handleMorph = () => {
    setFraction((morph) => {
      let newMorph = morph - cooldown;
      let newCooldown = 0;

      if (newMorph < 0) {
        newMorph = 0;
      } else if (newMorph > morphTime) {
        newMorph = morphTime;
        newCooldown = cooldownTime;
      }

      setCooldown(newCooldown);
      return newMorph;
    });
  };

  const handleCooldown = () => {
    setFraction(0);
    setCooldown(cooldownTime);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCooldown((cooldown) => {
        if (cooldown <= 0) {
          setTextIndex((textIndex) => getNextTextIndex(textIndex));
          handleMorph();
          return cooldownTime;
        } else {
          handleCooldown();
          return cooldown - 0.01;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const currentText = texts[textIndex];
  const nextText = texts[getNextTextIndex(textIndex)];
  const { blur: currentBlur, opacity: currentOpacity } =
    getCurrentTextStyles(fraction);
  const { blur: nextBlur, opacity: nextOpacity } = getNextTextStyles(fraction);

  return (
    <Container>
      <Text blur={currentBlur} opacity={currentOpacity}>
        {currentText}
      </Text>
      <Text blur={nextBlur} opacity={nextOpacity}>
        {nextText}
      </Text>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 5rem;
`;

const Text = styled.span`
  position: absolute;
  opacity: ${({ opacity }) => opacity}%;
  filter: ${({ blur }) => `blur(${blur}px)`};
`;

export default MorphingText;
