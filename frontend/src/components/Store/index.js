import React from 'react';
import Icon1 from '../../images/giftcertificate.svg';
import Icon2 from '../../images/merch.png';
import Icon3 from '../../images/logo.jpeg';
import { StoreContainer, StoreH1, StoreWrapper, StoreCard, StoreIcon, StoreH2, StoreP } from './StoreElements';

const Store = () => {
    return (
        <StoreContainer id="store">
            <StoreH1>Store</StoreH1>
            <StoreWrapper>
                <StoreCard>
                    <StoreIcon src={Icon1}/>
                    <StoreH2>Gift Cards</StoreH2>
                    <StoreP>Purchase a gift card for you favorite person!</StoreP>
                </StoreCard>
                <StoreCard>
                    <StoreIcon src={Icon2}/>
                    <StoreH2>Merch</StoreH2>
                    <StoreP>Check out all our merch in our store!</StoreP>
                </StoreCard>
                <StoreCard>
                    <StoreIcon src={Icon3}/>
                    <StoreH2>Services</StoreH2>
                    <StoreP>We can help you with the following things!</StoreP>
                </StoreCard>
            </StoreWrapper>    
        </StoreContainer>
    )
}

export default Store