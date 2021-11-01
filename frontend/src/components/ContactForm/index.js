import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { ContactFormContainer, ContactFormWrapper, Heading, InnerContainer, ContactFormRow, ContactFormColumn, Column1, Column2, ContactInfoColumn, InfoHeading, InfoSubtitle, InfoNumber, InfoEmail, InfoAddress, SocialMedia, SocialMediaWrap, SocialIcons, SocialIconLink, FaPhoneStyled, FaMailBulkStyled, FaMapMarkerStyled, ContactFormLogoContainer, ContactFormLogo } from './ContactFormElements';
import Form from './Form';

const ContactForm = () => {

    return (
        <>
            <ContactFormContainer id="contact">
                <ContactFormWrapper>
                    <Heading>Contact Us</Heading>
                    <InnerContainer>
                    <ContactFormRow>
                        <Column1>
                        <ContactInfoColumn>
                            <InfoHeading>Contact Information</InfoHeading>
                            <InfoSubtitle>Fill out the form and someone from our team will get back to you ASAP!</InfoSubtitle>
                            <InfoNumber><FaPhoneStyled />  385-337-4113</InfoNumber>
                            <InfoEmail><FaMailBulkStyled/>  juanofakind20@gmail.com</InfoEmail>
                            <InfoAddress><FaMapMarkerStyled />  West Valley City, UT, 84119</InfoAddress>
                            <SocialMedia>
                                <SocialMediaWrap>
                                    <SocialIcons>
                                        <SocialIconLink href="https://www.facebook.com/juanofakindkitchen/posts" target="_blank" aria-label='Facebook'>
                                            <FaFacebook />
                                        </SocialIconLink>
                                        <SocialIconLink href="https://www.instagram.com/juan_of_a_kindkitchen/" target="_blank" aria-label='Instagram'>
                                            <FaInstagram />
                                        </SocialIconLink>
                                        <SocialIconLink href="https://www.youtube.com/channel/UCDnP-XXi6GE43NSb1xeEX-Q" target="_blank" aria-label='Youtube'>
                                            <FaYoutube />
                                        </SocialIconLink>
                                        <SocialIconLink href="https://www.linkedin.com/company/juan-of-a-kind-kitchen" target="_blank" aria-label='Linkedin'>
                                            <FaLinkedin />
                                        </SocialIconLink>
                                    </SocialIcons>
                                </SocialMediaWrap>
                                <ContactFormLogoContainer>
                                    <ContactFormLogo>

                                    </ContactFormLogo>
                                </ContactFormLogoContainer>
                            </SocialMedia>
                        </ContactInfoColumn>
                        </Column1>
                        <Column2>
                        <ContactFormColumn>                  
                            <Form />
                        </ContactFormColumn>
                        </Column2>
                    </ContactFormRow>
                    </InnerContainer>
                </ContactFormWrapper>
            </ContactFormContainer>
        </>
    )
}

export default ContactForm;
