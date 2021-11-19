/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { StyledCateringFormContainer, StyledCateringForm, StyledInput, StyledFieldSet, StyledTextArea, StyledButton, StyledLabel, DatePickerContainer, StyledDatePicker, StyledH1, StyledModal, StyledModalContainer } from './CateringFormElements';

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

    const formatDate = (date) => {
        let day, month, year;
        day = date.getDay();
        month = date.getMonth();
        year = date.getFullYear();

        console.log({day, month, year})
        return `${year}-${month}-${day}`
    }

    const addCateringForm = async (e) => {
        let newFormatDate = formatDate(eventDate);
        let formField = new FormData()

        formField.append('first_name', firstName)
        formField.append('last_name', lastName)
        formField.append('phone_number', phoneNumber)
        formField.append('email', email)
        formField.append('package_type', packageType)
        formField.append('people_attending', peopleAttending)
        formField.append('budget', budget)
        formField.append('event_date', newFormatDate)
        formField.append('additional_hours', additionalHours)
        formField.append('location', location)
        formField.append('message', message)
        formField.append('payment_type', paymentType.toUpperCase())
        e.preventDefault();
        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/cateringform/',
            data: formField
        }).then((response) => {
            console.log(response.data);
            // history.push('/')
        }).catch(error => console.error(error));
    }


    return (
        <>
                    <StyledCateringFormContainer>
                        <StyledH1>Catering Request</StyledH1>
                        <StyledModalContainer>
                            <StyledModal />
                        </StyledModalContainer>
                        <StyledCateringForm>
                            <label htmlFor="firstName">First Name:</label>
                                <StyledInput 
                                    type="text" 
                                    name="first_name" 
                                    placeholder="First Name" 
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)} />
                                <br />
                                <label htmlFor="lastName">Last Name:</label>
                                <StyledInput 
                                    type="text" 
                                    name="last_name" 
                                    placeholder="Last Name" 
                                    value={lastName} 
                                    onChange={(e) => setLastName(e.target.value)} />
                                <br />
                                <label htmlFor="phoneNumber">Phone Number:</label>
                                <StyledInput 
                                    type="text" 
                                    name="phone_number" 
                                    placeholder="Phone Number" 
                                    value={phoneNumber} 
                                    onChange={(e) => setPhoneNumber(e.target.value)} />
                                <br />
                                <label htmlFor="email">Email:</label>
                                <StyledInput 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}/>
                                <StyledFieldSet>
                                    <legend>Contact Type</legend>
                                    <label>
                                        <input type="radio" value="The Lieutenant" name="package_type" onChange={(e) => setPackageType(e.target.value)} />
                                        The Lieutenant
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
                                <label htmlFor="peopleAttending">No. of people:</label>
                                <StyledInput
                                    type="text" 
                                    name="people_attending" 
                                    placeholder="How many guests?" 
                                    value={peopleAttending}
                                    onChange={(e) => setPeopleAttending(e.target.value)} />
                                <br />
                                <label htmlFor="budget">Budget:</label>
                                <StyledInput 
                                    type="text" 
                                    name="budget" 
                                    placeholder="What is your budget?" 
                                    value={budget} 
                                    onChange={(e) => setBudget(e.target.value)} />
                                <br />
                                <label htmlFor="eventDate"></label>
                                <DatePickerContainer>
                                <label>Event Date:</label>
                                    <StyledDatePicker
                                        name="event_date"
                                        returnValue="start"
                                        onChange={setEventDate}
                                        value={eventDate}
                                        dateFormat="MM/dd/yyyy"
                                    />
                                </DatePickerContainer>
                                <br />
                                <StyledFieldSet>
                                    <legend>Additional Hours:</legend>
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
                                <br />
                                <label htmlFor="location">Location:</label>
                                <StyledInput 
                                    type="text" 
                                    name="location" 
                                    placeholder="Location of the event" 
                                    value={location} 
                                    onChange={(e) => setLocation(e.target.value)} />
                                <br />
                                <StyledLabel htmlFor="message">Message:</StyledLabel>
                                <StyledTextArea 
                                    name="message" 
                                    placeholder="Please provide us with any additional info you think may help us    better serve your catering request" 
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
                                <StyledButton onClick={(e)=> addCateringForm(e)}>Submit Request</StyledButton>
                        </StyledCateringForm>
                    </StyledCateringFormContainer>
        </>
    );        
};

export default Form;