/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { StyledCateringFormContainer, StyledCateringForm, StyledInput, StyledFieldSet, StyledTextArea, StyledButton, StyledLabel, DatePickerContainer, StyledDatePicker } from './CateringFormElements';

const Form = () => {

    let history = useHistory();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [packageType, setPackageType] = useState(null);
    const [peopleAttending, setPeopleAttending] = useState("")
    const [budget, setBudget] = useState("")
    const [eventDate, setEventDate] = useState(new Date());
    const [additionalHours, setAdditionalHours] = useState(null);
    const [location, setLocation] = useState("")
    const [message, setMessage] = useState("")
    const [paymentType, setPaymentType] = useState(null);

    const addCateringForm = async () => {
        let formField = new FormData()

        formField.append('first_name', firstName)
        formField.append('last_name', lastName)
        formField.append('phone_number', phoneNumber)
        formField.append('email', email)
        formField.append('package_type', packageType)
        formField.append('people_attending', peopleAttending)
        formField.append('budget', budget)
        formField.append('event_date', eventDate)
        formField.append('additional_hours', additionalHours)
        formField.append('location', location)
        formField.append('message', message)
        formField.append('payment_type', paymentType)

        await axios({
            method: 'post',
            url: 'http://localhost:8000/api/cateringform/',
            data: formField
        }).then((response) => {
            console.log(response.data);
            // history.push('/')
        })
    }


    return (
        <>
                    <StyledCateringFormContainer>
                        <StyledCateringForm>
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
                                    name="last_name" 
                                    placeholder="Last Name" 
                                    value={lastName} 
                                    onChange={(e) => setLastName(e.target.value)} />
                                <br />
                                <label htmlFor="phoneNumber"></label>
                                <StyledInput 
                                    type="text" 
                                    name="phone_number" 
                                    placeholder="Phone Number" 
                                    value={phoneNumber} 
                                    onChange={(e) => setPhoneNumber(e.target.value)} />
                                <label htmlFor="email"></label>
                                <StyledInput 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}/>
                                <StyledFieldSet>
                                    <legend>Contact Type</legend>
                                    <label>
                                        <input type="radio" value="The Lieutant" name="package_type" onChange={(e) => setPackageType(e.target.value)} />
                                        The Lieutant
                                    </label>
                                    <label>
                                        <input type="radio" value="The Captain" name="package_type" onChange={(e) => setPackageType(e.target.value)} />
                                        The Captain
                                    </label>
                                    <label>
                                        <input type="radio" value="The Sargeant" name="package_type" onChange={(e) => setPackageType(e.target.value)} />
                                        The Sargeant
                                    </label>
                                </StyledFieldSet>
                                <label htmlFor="peopleAttending"></label>
                                <StyledInput 
                                    type="text" 
                                    name="people_attending" 
                                    placeholder="How many people for your event?" 
                                    value={peopleAttending}
                                    onChange={(e) => setPeopleAttending(e.target.value)} />
                                <label htmlFor="budget"></label>
                                <StyledInput 
                                    type="text" 
                                    name="budget" 
                                    placeholder="What is your budget for your event?" 
                                    value={budget} 
                                    onChange={(e) => setBudget(e.target.value)} />
                                <label htmlFor="eventDate"></label>
                                {/* <StyledInput 
                                    type="text" 
                                    name="event_date" 
                                    placeholder="Date of your event" 
                                    value={eventDate} 
                                    onChange={(e) => setEventDate(e.target.value)} /> */}
                                <DatePickerContainer>
                                Date Visited: 
                                    <StyledDatePicker
                                        name="event_date"
                                        returnValue="start"
                                        onChange={setEventDate}
                                        value={eventDate}
                                        dateFormat="MM/dd/yyyy"
                                    />
                                </DatePickerContainer>
                                <StyledFieldSet>
                                    <legend>Additional Hours</legend>
                                    <label>
                                        <input
                                            type="radio"
                                            value="1"
                                            name="additional_hours"
                                            onChange={(e) => setAdditionalHours(e.target.value)} />
                                        1 Hour
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="2"
                                            name="additional_hours"
                                            onChange={(e) => setAdditionalHours(e.target.value)} />
                                        2 Hours
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="3"
                                            name="additional_hours"
                                            onChange={(e) => setAdditionalHours(e.target.value)} />
                                        3 Hours
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="4"
                                            name="additional_hours"
                                            onChange={(e) => setAdditionalHours(e.target.value)} />
                                        4 Hours
                                    </label>
                                </StyledFieldSet>
                                <label htmlFor="location"></label>
                                <StyledInput 
                                    type="text" 
                                    name="location" 
                                    placeholder="Location of the event" 
                                    value={location} 
                                    onChange={(e) => setLocation(e.target.value)} />
                                <br />
                                <StyledLabel htmlFor="message">Message:</StyledLabel>
                                <br />
                                <StyledTextArea 
                                    name="message" 
                                    placeholder="Pleae provide us with any additional info you think may help us    better serve your catering request" 
                                    defaultValue={message} 
                                    onChange={(e) => setMessage(e.target.value)} />
                                <StyledFieldSet>
                                    <legend>Payment Type</legend>
                                    <label>
                                        <input
                                            type="radio"
                                            value="Cash"
                                            name="payment_type"
                                            onChange={(e) => setPaymentType(e.target.value)} />
                                        Cash
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="Venmo"
                                            name="payment_type"
                                            onChange={(e) => setPaymentType(e.target.value)} />
                                        Venmo
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="Card"
                                            name="payment_type"
                                            onChange={(e) => setPaymentType(e.target.value)} />
                                        Card
                                    </label>
                                </StyledFieldSet>
                                {/* <StyledError><p>Error Message</p></StyledError> */}
                                <StyledButton onClick={addCateringForm}>Submit Request</StyledButton>
                        </StyledCateringForm>
                    </StyledCateringFormContainer>
        </>
    );        
};

export default Form;