import React, { useState } from 'react';
import { CateringFormContainer, CateringFormImageContainer, CateringFormWrapper, StyledFrontCardContainer, StyledImage, StyledBackCardButton, StyledFrontCardButton, StyledBackCardContainer, StyledModal, StyledModalContainer, StyledLongImage, StyledBackCateringFormWrapper } from './CateringFormElements';
import background from '../../images/onlinecatering.png';
import mobilebackground from '../../images/mobilecateringmenu.png';
import backofform from '../../images/backofform.png';
import longbackofform from '../../images/longbackofform.png';
import ReactCardFlip from 'react-card-flip';
import Form from './Form';

const CateringForm = () => {

    const small = {mobilebackground}
    const large = {background}

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <>
            <CateringFormContainer id="catering">
                <CateringFormWrapper>
                    <CateringFormImageContainer>
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                            <StyledFrontCardContainer>
                                <StyledImage
                                    srcSet={`${small} 500w, ${large} 850w`}
                                    alt="Menu"
                                    src={background}
                                />
                              <StyledFrontCardButton onClick={handleClick}>Submit A Request</StyledFrontCardButton>
                            </StyledFrontCardContainer>
                            <StyledBackCardContainer>
                                <StyledImage
                                    src={backofform}
                                    alt="Menu"
                                />
                                <Form />
                                <StyledBackCardButton onClick={handleClick}>Click to flip</StyledBackCardButton>
                            </StyledBackCardContainer>
                        </ReactCardFlip>
                    </CateringFormImageContainer>
                </CateringFormWrapper>
            </CateringFormContainer>
        </>
    )
}

export default CateringForm;
