import React, { useEffect } from 'react';

import { MainBg, MainContainer, VideoBg, MainContent, MainH1 } from '../Main/styles'
import Video from '../../videos/wip.mp4';


const Custom = () => {
  useEffect(() => {
    document.title = "Make custom neon signs 😍"
  }, []);
  return (
    <MainContainer>
      <MainBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </MainBg>
      <MainContent>
        <MainH1>
          🔨 WIP! 🔧
        </MainH1>
      </MainContent>
    </MainContainer>

  );
}

export default Custom;
