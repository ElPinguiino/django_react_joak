/* eslint-disable no-undef */
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { StyledContactFormContainer, StyledContactForm, StyledInput, StyledFieldSet, StyledTextArea, StyledButton, StyledH2 , StyledLabel } from './ContactFormElements';

const Form = () => {

    let history = useHistory();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [contactType, setContactType] = useState(null)
    const [message, setMessage] = useState("")
    
    const addContactForm = async () => {
        let formField = new FormData()
        formField.append('first_name', firstName)
        formField.append('last_name', lastName)
        formField.append('phone_number', phoneNumber)
        formField.append('email', email)
        formField.append('contact_tBuype', contactType)
        formField.append('message', message)

        await axios({
            method: 'post',
            url:'/api/contactform/',
            data: formField
          }).then(response=>{
            console.log(response.data);
            history.push('/')
          })

    };

    return (
        <>
            <StyledContactFormContainer>
            <StyledH2>Message Us!</StyledH2>
                <StyledContactForm>
                    <label htmlFor="firstName"></label>
                    <StyledInput 
                        type="text" 
                        name="first_name" 
                        placeholder="First Name" 
                        defaultValue={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        
                    />
                    {/* {errors.firstName && <p>{errors.firstName}</p>} */}
                    <label htmlFor="lastName"></label>
                    <StyledInput 
                        type="text" 
                        name="last_name" 
                        placeholder="Last Name" 
                        defaultValue={lastName} 
                        onChange={(e) => setLastName(e.target.value)}

                    />
                    {/* {errors.lastName && <p>{errors.lastName}</p>} */}
                    <br />
                    <label htmlFor="phoneNumber"></label>
                    <StyledInput 
                        type="text" 
                        name="phone_number" 
                        placeholder="Phone Number" 
                        defaultValue={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)}

                    />
                    {/* {errors.phoneNumber && <p>{errors.phoneNumber}</p>} */}
                    <label htmlFor="email"></label>
                    <StyledInput 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        defaultValue={email} 
                        onChange={(e) => setEmail(e.target.value)}

                    />
                    {/* {errors.email && <p>{errors.email}</p>} */}
                    <StyledFieldSet>
                        <legend>Contact Type</legend>
                        <label>
                            <input 
                                type="radio" 
                                defaultValue="Question" 
                                name="contact_type" 
                                onChange={(e) => setContactType(e.target.value)} 

                            />
                            Question
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                defaultValue="Concern" 
                                name="contact_type" 
                                onChange={(e) => setContactType(e.target.value)} 

                            />
                            Concern
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                defaultValue="Feedback" 
                                name="contact_type" 
                                onChange={(e) => setContactType(e.target.value)} 

                            />
                            Feedback
                        </label>
                    </StyledFieldSet>
                    <StyledLabel htmlFor="message">Message:</StyledLabel>
                    <br />
                    <StyledTextArea 
                        name="message" 
                        placeholder="Give us a little more info about your contact in order to better assist you!" 
                        defaultValue={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                    
                    />
                    {/* {errors.message && <p>{errors.message}</p>} */}
                    <br />
                    <StyledButton onClick={addContactForm}>Submit Contact</StyledButton>
                </StyledContactForm>
            </StyledContactFormContainer>
        </>
    );      
};

export default Form;