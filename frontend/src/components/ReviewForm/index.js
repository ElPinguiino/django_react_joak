import React from 'react';
import { ReviewFormContainer, ReviewFormWrapper, ReviewFormRow, ReviewFormContent, ReviewFormFormField, StyledH2, CarouselContainer } from './ReviewFormElements';
import Form from './Form';
import CarouselComponent  from '../ReviewForm/Carousel/Carousel'

const ReviewForm = () => {
    return (
        <>
            <ReviewFormContainer id="reviews">
                <ReviewFormWrapper>
                    <ReviewFormRow>
                        <ReviewFormContent>
                        <StyledH2>Reviews</StyledH2>
                        <CarouselContainer>
                            <CarouselComponent />
                        </CarouselContainer>
                        </ReviewFormContent>
                        <ReviewFormFormField>
                            <Form />
                        </ReviewFormFormField>
                    </ReviewFormRow>
                </ReviewFormWrapper>
            </ReviewFormContainer>
        </>
    )
}

export default ReviewForm
