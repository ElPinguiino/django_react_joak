import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledCarouselComponent, StyledCarouselItem, StyledP } from './CarouselElements';

const CarouselComponent = () => {

    const [reviews, setReviews] = useState([])

    const getReviews = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/reviewform/')
        setReviews(response.data)
    }

    useEffect(() =>{
        getReviews();
    }, [])

    return (
        <>
            <StyledCarouselComponent autoplay={ true } autoplay_speed={ 5000 }>
            {reviews.map((reviews) => (
                <StyledCarouselItem key={reviews.review_form_id}>
                    <StyledP>Date Visited: {reviews.date_visited}</StyledP>
                    <br />
                    <StyledP>Food Rating: {reviews.food_rating}</StyledP>
                    <br />
                    <StyledP>Service Rating: {reviews.service_rating}</StyledP>
                    <br />
                    <StyledP>{reviews.first_name} {reviews.last_initial} says: {reviews.review_message}</StyledP>
                </StyledCarouselItem>
                )
                )
            }
            </StyledCarouselComponent>
        </>
    )
}

export default CarouselComponent