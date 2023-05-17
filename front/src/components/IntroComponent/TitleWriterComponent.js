import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
// import { CSSTransition } from 'react-transition-group';
import { TypeAnimation } from 'react-type-animation';


const BlurryTextMorphEffect = () => {

  return (
    <div>
      <TypeAnimation
          sequence={[
            // Same String at the start will only be typed once, initially
            'Find Fake nFt is a powerful tool to prevent AI-powered scam NFT incidents.',
            2000,
            'Find Fake nFt ',
            1000,
            'Find Fake nFt will protect the value of your valuable content assets.',
            2000,
            'Find Fake nFt ',
            1000,
          ]}
          speed={30}
          style={{ 
            fontSize: '0.5vw', marginTop: '2vw', 
            background: 'linear-gradient(to right, #75dbb4, #80cfca, #79a6dd, #7aa4dd, #b296e5, #c8b4ec)',
	          color: 'transparent',
            padding: '0 20vw',
            opacity: '0.5',
            boxShadow: '0 1vw 1.5vw rgba(0,0,0,0.15), 0 0.5vw 0.5vw rgba(0,0,0,0.05)',
            
          }}
          repeat={Infinity}
        />
        <br/><br/>
        <TypeAnimation
          sequence={[
            // Same String at the start will only be typed once, initially
            'Find Fake nFt is a powerful tool to prevent AI-powered scam NFT incidents.',
            2000,
            'Find Fake nFt ',
            1000,
            'Find Fake nFt will protect the value of your valuable content assets.',
            2000,
            'Find Fake nFt ',
            1000,
          ]}
          speed={30}
          style={{ 
            fontSize: '1.2vw', marginTop: '2vw', 
            background: 'transparent',
	          fontStyle: 'italic',
            color: '#2d2d2d',
          }}
          repeat={Infinity}
        />
        {/* <TypeWriterEffect
        
                multiText= {['Hello', 'World']}
                autoStart={true}
                loop={true}
        /> */}
    </div>
    
  );
};

export default BlurryTextMorphEffect;
