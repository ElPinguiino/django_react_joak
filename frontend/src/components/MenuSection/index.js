import React from 'react'
import {
    MenuSectionContainer,
    MenuSectionWrapper,
    MenuSectionRow,
    Column1,
    Column2,
    ImgWrap,
    Img,
    StyledItemTitle,
    StyledMenuSectionTitle,
    StyledItemPrice

} from './MenuSectionElements';

const MenuSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    
    return (
        <>
        <MenuSectionContainer lightBg={lightBg} id={id}>
            <MenuSectionWrapper>
                <MenuSectionRow imgStart={imgStart}>
                    <Column1>
                        <StyledMenuSectionTitle>Menu Items</StyledMenuSectionTitle>
                        <br />
                        <StyledItemTitle>Birria Taco<StyledItemPrice>$2.50</StyledItemPrice></StyledItemTitle>
                        <br />
                        <StyledItemTitle>QuesaBirria Taco<StyledItemPrice>$3.50</StyledItemPrice></StyledItemTitle>
                        <br />
                        <StyledItemTitle>Quesadilla<StyledItemPrice>$8.00</StyledItemPrice></StyledItemTitle>
                        <br />
                        <StyledItemTitle>Burrito<StyledItemPrice>$9.00</StyledItemPrice></StyledItemTitle>
                        <br />
                        <StyledItemTitle>Ramen<StyledItemPrice>$9.00</StyledItemPrice></StyledItemTitle>
                        <br />
                        <StyledItemTitle>Torta<StyledItemPrice>$11.00</StyledItemPrice></StyledItemTitle>
                        <br />
                        <StyledItemTitle>Birria Plate<StyledItemPrice>$9.00</StyledItemPrice></StyledItemTitle>
                        <br />
                        <StyledItemTitle>Birria Nachos<StyledItemPrice>$13.00</StyledItemPrice></StyledItemTitle>
                        <br />
                        <StyledItemTitle>Birria Fries<StyledItemPrice>$13.00</StyledItemPrice></StyledItemTitle>
                        <br />
                        <StyledMenuSectionTitle>Sides</StyledMenuSectionTitle>
                        <br />
                        <StyledItemTitle>Chips w/Salsa<StyledItemPrice>$4.00</StyledItemPrice></StyledItemTitle>
                        <br />
                        <StyledItemTitle>Beans<StyledItemPrice>$2.00</StyledItemPrice></StyledItemTitle>
                        <br />
                        <StyledItemTitle>Rice<StyledItemPrice>$2.00</StyledItemPrice></StyledItemTitle>
                        <br />
                        <StyledItemTitle>8 oz Consome<StyledItemPrice>$2.00</StyledItemPrice></StyledItemTitle>
                        <br />
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </MenuSectionRow>
            </MenuSectionWrapper>
        </MenuSectionContainer>
        </>
    )
}

export default MenuSection;
