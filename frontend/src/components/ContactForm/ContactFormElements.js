import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { FaPhone, FaMapMarker, FaMailBulk } from 'react-icons/fa';

export const ContactFormContainer = styled.div`
    background-color: #fff;
    @media screen and (max-width: 780px) {
    }
`
export const ContactFormWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 1050px) {
        height: 900px;
    }

    @media screen and (max-width: 780px) {
        height: 1500px;
    }
`
export const ContactHeadingWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 160px;
    width: 50%;
    max-width: 1100px;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    padding: 24px 24px;
    justify-content: center;
    border-radius: 15px;
    border: 5px solid black;
    box-shadow: 10px 10px;
    background: #f857a6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ff5858, #f857a6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    @media screen and (max-width: 1050px) {
        margin-bottom: -60px;
    }

    @media screen and (max-width: 780px) {
        width: 50%;
    }
`
/* Styling for contact heading (orange box) */
export const Heading = styled.h1`
    margin-top: 5rem;
    font-size: 3rem;
    line-height: 1.1;
    text-align: center;
    font-weight: 800;
    text-shadow: 3px 3px 3px black;
    color: #fde069;

    @media screen and (max-width: 780px) {
        margin-bottom: 0px;
    }
`
export const Subtitle = styled.h3`
    color: black;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    justify-content: center;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;

    @media screen and (max-width: 780px) {
        font-size: 13px;
    }
`

export const InnerContainer = styled.div`
    display: grid;
    z-index: 1;
    height: 480px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 60px;
    justify-content: center;
    background-color: #FFFFFF;

    @media screen and (max-width: 780px) {
        margin-top: -580px;
    }
`
export const ContactFormRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2 col3';
    @media screen and (max-width: 700px) {
        grid-template-areas:
            'col1' 'col2 col3';
    }
`
export const Column1 = styled.div`
    margin-bottom: 15px;
    grid-area: col1;
`
export const ContactInfoColumn = styled.div`
    display: grid;
    z-index: 1;
    height: 480px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 24px 24px;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 10px 10px;
    border: 5px solid black;

    @media screen and (max-width: 1050px) {
        width: 100%;
        height: 600px;
    }

    @media screen and (max-width: 780px) {
        width: 187.5%;
    }

    @media screen and (max-width: 450px) {
        width: 85%;
    }
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    grid-column-start: 2;
    grid-area: col2 col3;

    @media screen and (max-width: 780px) {
        grid-column-start: 1;
    }
`

export const ContactFormColumn = styled.div`
    display: grid;
    z-index: 1;
    height: 480px;
    width: 175%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: 25px;
    padding: 24px 24px;
    justify-content: center;
    border-radius: 15px;
    border: 5px solid black;
    box-shadow: 10px 10px;

    @media screen and (max-width: 1050px) {
        width: 155%;
        height: 600px;
    }

    @media screen and (max-width: 960px) {
        width: 105%;
        height: 600px;
    }

    @media screen and (max-width: 780px) {
        width: 187.5%;
        height: 600px;
    }

    @media screen and (max-width: 450px) {
        width: 85%;
    }
`
export const InfoHeading = styled.h2`
    font-size: 24px;
    font-family: ;
    text-align: center;
    color: black;
    text-shadow: #fde069 1.5px 3px;
    font-size: 1.5rem;

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`

export const InfoSubtitle = styled.h3`
    font-size: 16px;
    text-align: center;
    color: black;
    text-shadow: #fde069 1px 2px;
    font-size: 1rem;
    margin-bottom: 10px;
    @media screen and (max-width: 480px) {
    }
`

export const InfoNumber = styled.h2`
    color: black;
    text-shadow: #fde069 1px 2px;
    font-size: 1rem;
    text-align: left;
    @media screen and (max-width: 480x0) {
        
    }
`

export const InfoEmail = styled.h2`
    color: black;
    text-shadow: #fde069 1px 2px;
    font-size: 1rem;
    text-align: left;
    @media screen and (max-width: 480x0) {
    
    }
`

export const InfoAddress = styled.h2`
    color: black;
    text-shadow: #fde069 1px 2px;
    font-size: 1rem;
    text-align: left;
    @media screen and (max-width: 480x0) {
        
    }
`

export const FaPhoneStyled = styled(FaPhone)`
    margin-right: 20px;
    color: #fde069;
    font-size: 1.25rem;
`

export const FaMapMarkerStyled = styled(FaMapMarker)`
    margin-right: 20px;
    color: #fde069;
    font-size: 1.25rem;
`

export const FaMailBulkStyled = styled(FaMailBulk)`
    margin-right: 20px;
    color: #fde069;
    font-size: 1.25rem;
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #000000;
    font-size: 3rem;
`

export const StyledContactFormContainer = styled.div`
    
`

export const StyledContactForm = styled.form`
    width: 100%;
    padding: 40px;
    box-sizing: border-box; 

`

export const StyledInput = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    width: 15em;
    color: #fde069;
    border: 2px black solid;
    box-shadow: 5px 5px;
    border-radius: 10px;
`
export const StyledFieldSet = styled.fieldset`
    padding: 0.5em;
    margin: 0.5em;
    color: #fde069;
    background: ;
    box-shadow: 5px 5px;
    border: 2px solid black;
    border-radius: 5px;

    legend {
        padding: 0 10px;
        color: black;
    }

    label {
        padding-right: 10px;
        color: black;
    }

    input {
        margin-right: 5px;
    }
`

export const StyledTextArea = styled.textarea`
    padding: 0.5em;
    margin: 0.5em;
    color: black;
    border: 2px black solid;
    border-radius: 10px;
    width: 100%;
    min-height: 100px;
    box-shadow: 5px 5px;
    resize: none;
`

export const StyledButton = styled.button`
    display: block;
    background-color: black;
    color: #fde069;
    font-size: 1rem;
    border: black 2px solid;
    border-radius: 10px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
    box-shadow: 5px 5px;
`

export const StyledError = styled.div`
    color: red;
    font-weight: 800;
    margin: 0 0 0px 0;
`

export const StyledSuccess = styled.div`
    color: green;
`

export const StyledH2 = styled.h2`
    text-align: center;
    color: #fde069;
    text-shadow: black 4px 4px;
    font-size: 2.5rem;

    @media screen and (max-width: 780px) {
        font-size: 2rem;
    }
`

export const StyledLabel = styled.label`
    color: black;
`

// Styling for the Contact Form success
export const FormSuccessContainer = styled.div`

`
export const FormSuccessH1 = styled.h1`

`

export const FormSuccessImage = styled.img`

`

export const ContactFormLogoContainer = styled.div`

`
export const ContactFormLogo = styled.img`

`