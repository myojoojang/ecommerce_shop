import React, { useState } from 'react';
import { MainBg, MainContainer, VideoBg, MainContent, MainBtnWrapper, MainH1, MainP } from './styles'
import { Button } from '@material-ui/core'
import Video from '../../videos/main.mp4';

const Main = () => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }
  return (
    <MainContainer >
      <MainBg>

        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </MainBg>
      <MainContent>
        <MainH1>
          text whatever you think it would be fit
        </MainH1>
        <MainP>
          Sign up for a new account today
        </MainP>
        <MainBtnWrapper>
          <Button
            color="primary"
          >
            Create an Account {hover ? '->' : '>'}
          </Button>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>

  )
}

export default Main;
