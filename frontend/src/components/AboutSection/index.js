import React from 'react'
import { Button } from '../ButtonElement';
import {
    AboutSectionContainer,
    AboutSectionWrapper,
    AboutSectionRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './AboutSectionElements';
import InstagramEmbed from 'react-instagram-embed';

const AboutSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
        <AboutSectionContainer lightBg={lightBg} id={id}>
            <AboutSectionWrapper>
                <AboutSectionRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} primary={primary}/>
                        </ImgWrap>                     
                    </Column2>
                </AboutSectionRow>
            </AboutSectionWrapper>
        </AboutSectionContainer>
        </>
    )
}

export default AboutSection;
