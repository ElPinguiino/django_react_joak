import styled from 'styled-components';
import StyledCarousel from 'react-card-carousel';

export const HomeSectionContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#FFFFFF' : '#010606')}
    ;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const HomeSectionWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }
`

export const HomeSectionRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col2 col1'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: #fde069;
    font-size: 24px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-shadow: 1px 1px 1px white;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    // color: ${({ lightText }) => (lightText ? '#FFFFFF' : '#010606')};
    color: #29f9fc;
    text-shadow: 1px 1px 1px white;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    // color: ${({ darkText }) => (darkText ? '#010606' : '#FFFFFF')};
    color: white;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    display: none;
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const CarouselContainer = styled.div`
    position: absolute;
    left: 34%;
    top: 87.5%;

    @media screen and (max-width: 500px) {
        position: absolute;
        left: 50%;
        top: 170%;
    }
`

export const StyledCarouselComponent= styled(StyledCarousel)`
    
`

export const StyledP = styled.p`
    color: black;
    font-size: .75rem;
    padding: .25rem;
    font-weight: bold;

`

export const StyledCarouselItem = styled.div`
    height: 325px;
    width: 325px;

    text-align: center;
    background: black;
    color: black;
    font-size: 12px;
    text-transform: uppercase;
    border-radius: 10px;


    @media screen and (max-width: 800px) {
        height: 250px;
        width: 250px;
    }
`

export const DetailsContainer = styled.div`
    margin-top: .25rem;
    background-color: #fde069;
    padding-top: .5rem;
    padding-bottom: .5rem;
    border-radius: 10px;
`

export const BackgroundContainer = styled.div`

`

export const StyledBgImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`