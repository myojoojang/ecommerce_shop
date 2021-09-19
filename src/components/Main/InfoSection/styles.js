import styled from 'styled-components'


export const InfoContaniner = styled.div`
  background: ${({ lightBg }) => (lightBg ? '#00ff00' : 'black')};
  color: black;
`
export const InfoWrapper = styled.div`
  display: grid;
  padding: 40px;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto,1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
  @media screen and (max-width: 768px){
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1 col1' 'col2 col2'` : `'col2 col2' 'col1 col1'`)};
  }
`
export const Column1 = styled.div`
  grid-area: col1;
`
export const Column2 = styled.div`
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 40vw;
  margin: auto;
  margin-top: 20px;
  border: solid 3px black;
  background-color: white;
  padding: 10px;
  box-shadow: 10px 10px 0px -1px #ff40ff;

  @media screen and (max-width: 768px){
    max-width:100%;
    margin:40px 0;
  }
`
export const TopLine = styled.p`
  color:#ff40ff;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin: 16px 0;
`
export const Heading = styled.h1`
  font-size: 48px;
  margin: 16px 0;
  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`
export const Subtitle = styled.div`
  margin: 35px 0;
  font-size: 18px;
  line-height: 24px;
`


export const ImgWrapper = styled.div`
  max-width: 50vw;
  height: 100%;
  padding:100px;
  margin:auto;
  @media screen and (max-width: 768px){
    max-width:100vw;
    padding: 0;
  }
`
export const Img = styled.img`
  width: 100%;

  padding-right: 0;
`