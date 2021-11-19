import React, { useState } from 'react';
import { CateringFormContainer, CateringFormImageContainer, CateringFormWrapper, StyledFrontCardContainer, StyledImage, StyledBackCardButton, StyledFrontCardButton, StyledBackCardContainer, StyledModal, StyledModalContainer, StyledLongImage, StyledBackCateringFormWrapper } from './CateringFormElements';
import background from '../../images/onlinecatering.png';
import backofform from '../../images/backofform1.png';
import longbackofform from '../../images/longbackofform.png';
import ReactCardFlip from 'react-card-flip';
import Form from './Form';

const CateringForm = () => {

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
                                    src={background}
                                    alt="Menu"
                                />
                              <StyledFrontCardButton onClick={handleClick}>Submit A Request</StyledFrontCardButton>
                            </StyledFrontCardContainer>
                            <StyledBackCardContainer>
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
