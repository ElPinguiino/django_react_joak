/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { StyledReviewFormContainer, StyledReviewForm, StyledInput, StyledFieldSet, StyledTextArea, StyledButton, StyledH2, DatePickerContainer, StyledDatePicker } from './ReviewFormElements';

const Form = () => {

    const [firstName, setFirstName] = useState("")
    const [lastInitial, setLastInitial] = useState("")
    const [dateVisited, setDateVisited] = useState("")
    const [foodRating, setFoodRating] = useState("")
    const [serviceRating, setServiceRating] = useState(null);
    const [message, setMessage] = useState("")

    let history = useHistory();

    const addReviewForm = async () => {
        let formField = new FormData()
        formField.append('first_name', firstName)
        formField.append('last_initial', lastInitial)
        formField.append('date_visited', dateVisited)
        formField.append('food_rating', foodRating)
        formField.append('service_rating', serviceRating)
        formField.append('message', message)

        await axios({
            method: 'post',
            url: 'http://localhost:8000/api/reviewform/',
            data: formField
        }).then((response) => {
            console.log(response.data);
            history.push('/')
        })
    }

    return (
        <>
            <StyledReviewFormContainer>
                <StyledH2>Leave Us a Review!</StyledH2>
                <StyledReviewForm>
                    <label htmlFor="firstName"></label>
                    <StyledInput 
                        type="text" 
                        name="first_name" 
                        placeholder="First Name" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                    <label htmlFor="lastName"></label>
                    <StyledInput 
                        type="text" 
                        name="last_initial" 
                        placeholder="Last Initial" 
                        value={lastInitial} 
                        onChange={(e) => setLastInitial(e.target.value)} />
                    <label htmlFor="dateVisited"></label>
                    <StyledInput
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Date Visited"
                        name="date_visited"
                        defaultValue={dateVisited}
                        onChange={(e) => setDateVisited(e.target.value)} />
                    {/* <DatePickerContainer>
                        Date Visited: 
                        <StyledDatePicker
                            name="date_visited"
                            returnValue="start"
                            onChange={setDateVisited}
                            value={dateVisited}
                            dateFormat="MM/dd/yyyy"
                        />
                    </DatePickerContainer> */}
                    <StyledFieldSet>
                        <legend>Food Rating</legend>
                        <label>
                            <input 
                                type="radio" 
                                value="Not very good" 
                                name="food_rating" 
                                onChange={(e) => setFoodRating(e.target.value)} />
                                1
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value="Not good" 
                                name="food_rating" 
                                onChange={(e) => setFoodRating(e.target.value)} />
                                2
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value="OK" 
                                name="food_rating" 
                                onChange={(e) => setFoodRating(e.target.value)} />
                                3
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value="Good" 
                                name="food_rating" 
                                onChange={(e) => setFoodRating(e.target.value)} />
                                4
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value="Very good" 
                                name="food_rating" 
                                onChange={(e) => setFoodRating(e.target.value)} />
                                5
                        </label>
                    </StyledFieldSet>
                    <StyledFieldSet>
                        <legend>Service Rating</legend>
                        <label>
                            <input
                                type="radio"
                                value="Not very good"
                                name="service_rating"
                                onChange={(e) => setServiceRating(e.target.value)} />
                            1
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Not good"
                                name="service_rating"
                                onChange={(e) => setServiceRating(e.target.value)} />
                            2
                        </label>
                        <label>
                            <input
                                type="radio" 
                                value="OK" 
                                name="service_rating" 
                                onChange={(e) => setServiceRating(e.target.value)} />
                            3
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value="Good" 
                                name="service_rating" 
                                onChange={(e) => setServiceRating(e.target.value)} />
                            4
                        </label>
                        <label>
                            <input
                                type="radio" 
                                value="Very good" 
                                name="service_rating" 
                                onChange={(e) => setServiceRating(e.target.value)} />
                            5
                        </label>
                    </StyledFieldSet>
                    <StyledTextArea 
                        name="message" 
                        placeholder="Let us know how your experience was!" 
                        defaultValue={message} 
                        onChange={(e) => setMessage(e.target.value)} />
                    <StyledButton onClick={addReviewForm}>Submit Review</StyledButton>
                </StyledReviewForm>
            </StyledReviewFormContainer>
        </>
    );        
};

export default Form;