import styled from 'styled-components';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';

export const MenuSectionContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#FFFFFF' : '#010606')}
    ;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const MenuSectionWrapper = styled.div`
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
        height: 1380px;
    }

    @media screen and (max-width: 468px) {
        height: 1580px;
    }
`

export const MenuSectionRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

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
    color: #29F9FC;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#FFFFFF' : '#010606')};

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
    color: yellow;
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
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`


export const CardContainer = styled(Card)`
    background-color: black;
`

export const StyledCardMedia = styled(CardMedia)`

`

export const StyledCard = styled(CardContent)`

`

export const StyledTypography = styled(Typography)`

`

export const StyledItemTitle = styled.h3`
    color: black;
    font-size: 1.25rem;
`

export const StyledMenuSectionTitle = styled.h1`
    color: #fde069;
    text-shadow: 2px 2px 2px black;
`
export const StyledItemPrice = styled.h3`
    color: black;
    text-shadow: 1px 1px 1px #fde069;
    float: right;
    font-size: 1.25rem;
`
