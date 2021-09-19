import React from 'react'
import { Column2, Column1, InfoContaniner, InfoRow, InfoWrapper, TextWrapper, TopLine, Heading, Subtitle, Img, ImgWrapper } from './styles'


const InfoSection = ({ lightText, lightBg, id, img, imgStart, topLine, headLine, darkText, description, alt }) => {
  return (
    <>
      <InfoContaniner lightBg={lightBg} id={id} >
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle>
                  {description}
                </Subtitle>

              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img src={img} alt={alt} />
              </ImgWrapper>

            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContaniner>
    </>
  )
}

export default InfoSection
