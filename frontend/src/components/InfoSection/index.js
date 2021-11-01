import React from 'react'
import { Button } from '../ButtonElement';
import {
    InfoSectionContainer,
    InfoSectionWrapper,
    InfoSectionRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoSectionElements';
import InstagramFeed from './InstagramFeed';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
        <InfoSectionContainer lightBg={lightBg} id={id}>
            <InfoSectionWrapper>
                <InfoSectionRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <InstagramFeed />
                        </ImgWrap>
                    </Column2>
                </InfoSectionRow>
            </InfoSectionWrapper>
        </InfoSectionContainer>
        </>
    )
}

export default InfoSection;
