import React, { useEffect } from 'react';
import { MainBg, MainContainer, VideoBg, MainContent, MainBtnWrapper, MainH1, MainButton } from './styles'

import Video from '../../videos/main.mp4';

const Main = () => {
  useEffect(() => {
    document.title = "NEONs ✨"
  }, []);
  return (
    <MainContainer>
      <MainBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </MainBg>
      <MainContent>
        <MainH1>
          text whatever you think it would be fit
        </MainH1>

        <MainBtnWrapper>
          <MainButton >
            Create an Account
          </MainButton>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>

  )
}

export default Main;
