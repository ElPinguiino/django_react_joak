import React from 'react'
import { Button } from '../ButtonElement';
import {
    HomeSectionContainer,
    HomeSectionWrapper,
    HomeSectionRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    CarouselContainer
} from './HomeSectionElements';
import PostCarouselComponent  from '../HomeSection/Carousel/Carousel'

const HomeSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
        <HomeSectionContainer lightBg={lightBg} id={id}>
            <HomeSectionWrapper>
                <HomeSectionRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <CarouselContainer>
                            <PostCarouselComponent />
                        </CarouselContainer>
                    </Column2>
                </HomeSectionRow>
            </HomeSectionWrapper>
        </HomeSectionContainer>
        </>
    )
}

export default HomeSection;
