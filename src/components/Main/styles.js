import styled from 'styled-components'

export const MainContainer = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin:0;
  height: 100vh;
  position: relative;
  z-index:1;

   :before{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.3)0%;
    z-index:2;
  } 
`

export const MainBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`


export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit:cover;
  object-fit: cover;
  background: black;

`

export const MainContent = styled.div`
  margin-top: 100px;
  z-index:3;
  max-width: 800px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainH1 = styled.h1`
  color: white;
  font-size: 56px;
  text-align: center;
  @media screen and (max-width:768px){
    font-size: 40px;
  }
  
  @media screen and (max-width:480px){
    font-size: 32px;
  }
`



export const MainBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const MainButton = styled.button`
  border-radius: 0;
  border: none;
  width: 220px;
  height: 50px;
  font-size: 18px;
  color: black;
  box-shadow: 10px 10px 0px -1px #000000;
  transition: 0.3s ease-out;
  background-color: #00ff00;
    :hover{
      color: #00ff00;
      background-color: black;
      box-shadow: 10px 10px 0px -1px #00ff00;

    }

`