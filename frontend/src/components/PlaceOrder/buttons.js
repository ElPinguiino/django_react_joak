import React from 'react';
import { StyledFilterButtonsContainer, StyledFilterButton } from './PlaceOrderElements';

const FilterButtons = () => {
    return (
        <>
            <StyledFilterButtonsContainer>
                <StyledFilterButton>
                    Food
                </StyledFilterButton>
                <StyledFilterButton>
                    Sides
                </StyledFilterButton>
                <StyledFilterButton>
                    Beverages
                </StyledFilterButton>
                <StyledFilterButton>
                    Desserts
                </StyledFilterButton>
                <StyledFilterButton>
                    Gift Cards
                </StyledFilterButton>
                <StyledFilterButton>
                    Merch
                </StyledFilterButton>
            </StyledFilterButtonsContainer>
        </>
    )
}

export default FilterButtons
