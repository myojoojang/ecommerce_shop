import React, { useEffect } from 'react';
import { MainBg, MainContainer, VideoBg, MainContent, MainBtnWrapper, MainH1, MainButton } from './styles'
import { Link } from 'react-router-dom';
import Video from '../../videos/main.mp4';

import InfoSection from './InfoSection';
import { homeObjOne, homeObjTwo } from './InfoSection/Data'

const Main = () => {
  useEffect(() => {
    document.title = "NEONESS ✨"
  }, []);
  return (
    <>
      <MainContainer>
        <MainBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </MainBg>
        <MainContent>
          <MainH1>
            HIGH QUALITY CUSTOM & OFF THE SHELF NEON SIGNS
          </MainH1>

          <MainBtnWrapper>
            <Link to='/products' >
              <MainButton>
                SHOP NOW!
              </MainButton>
            </Link>
          </MainBtnWrapper>
        </MainContent>
      </MainContainer>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />




    </>

  )
}

export default Main;
