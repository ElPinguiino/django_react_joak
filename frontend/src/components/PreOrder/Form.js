 import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { StyledPreOrderFormContainer, StyledPreOrderForm, StyledInput, StyledFieldSet, StyledTextArea, StyledError, StyledButton, StyledH2, StyledLabel } from './PreOrderElements';

const PreOrderForm = () => {
    
    let history = useHistory();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [paymentChoiceUsername, setPaymentChoiceUsername] = useState("")
    const [budget, setBudget] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [additionalHours, setAdditionalHours] = useState(null);
    const [location, setLocation] = useState("")
    const [message, setMessage] = useState("")
    const [paymentType, setPaymentType] = useState(null);

    const addCateringForm = async () => {
        let formField = new FormData

        formField.append('first_name', firstName)
        formField.append('last_name', lastName)
        formField.append('phone_number', phoneNumber)
        formField.append('email', email)
        formField.append('payment_choice_username', paymentChoiceUsername)
        formField.append('budget', budget)
        formField.append('eventDate', eventDate)
        formField.append('location', location)
        formField.append('message', message)

        await axios({
            method: 'post',
            url: 'http://localhost:8000/api/cateringform/',
            data: formField
        }).then((response) => {
            console.log(response.data);
            history.push('/')
        })
    }
    return (
        <>
            <StyledPreOrderFormContainer>
                <StyledPreOrderForm>
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
                            defaultValue={email} 
                            onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="paymentChoiceUsername"></label>
                        <StyledInput 
                            type="text" 
                            name="payment_choice_username" 
                            placeholder="Username for invoice" 
                            value={paymentChoiceUsername}
                            onChange={(e) => setPaymentChoiceUsername(e.target.value)} />
                        <br />
                        <StyledLabel htmlFor="message">Message:</StyledLabel>
                        <br />
                        <StyledTextArea 
                            name="message" 
                            placeholder="Pleae provide us with any additional info you think may help us    better serve your catering request" 
                            defaultValue={message} 
                            onChange={(e) => setMessage(e.target.value)} />
                        <StyledError><p>Error Message</p></StyledError>
                    <StyledButton onClick={addCateringForm}>Submit Pre-Order Request</StyledButton>
                </StyledPreOrderForm>
            </StyledPreOrderFormContainer>
        </>
    )
}

export default PreOrderForm
