import styled from 'styled-components';
import DatePicker from 'react-date-picker';
import StyledCarousel from 'react-card-carousel';

export const ReviewFormContainer = styled.div`
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 860px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768px) {
        height: 1600px;
    }
`

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

export const ReviewFormWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        
    }
`

export const ReviewFormRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2';
    }
`

export const StyledReviewFormCard = styled.div`
    o-object-fit: cover;
`

export const ReviewFormContent = styled.div`
    display: grid;
    z-index: 1;
    height: 600px;
    width: 100%;
    max-width: 1100px;
    padding: 24px 24px;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 10px 10px;
    border: 5px solid black;
`

export const ReviewFormFormField = styled.div`
    display: grid;
    z-index: 1;
    height: 600px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: 25px;
    padding: 24px 24px;
    grid-area: col2;
    justify-content: center;

    border-radius: 15px;
    box-shadow: 10px 10px;
    border: 5px solid black;

    @media screen and (max-width: 975px) {
        margin-left: auto;
        height: 700px;
    }
`

export const StyledReviewFormContainer = styled.div`
    
`

export const StyledReviewForm = styled.form`
    width: 100%;
    padding: 40px;
    box-sizing: border-box; 
`

export const StyledInput = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    width: 15em;
    color: #fde069;
    // background: #859398;
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
    border: 1px solid black;
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
    // background: #859398;
    border: 2px black solid;
    border-radius: 10px;
    width: 100%;
    min-height: 100px;
    color: #fde069;
    box-shadow: 5px 5px;
    resize: none;
`

export const StyledButton = styled.button`
    display: block;
    background-color: black;
    color: #fde069;
    font-size: 1rem;
    border: black 1px solid;
    border-radius: 10px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
    box-shadow: 5px 5px;

    @media screen and (max-width: 768px) {
        margin-top: 20px;
    }
`

export const StyledError = styled.div`
    color: red;
    font-weight: 800;
    margin: 0 0 0px 0;
`

export const StyledH2 = styled.h2`
    text-align: center;
    color: black;
    text-shadow: #fde069 2px 4px;
    font-size: 2.5rem;

    @media screen and (max-width: 768px) {
        font-size: 1.75rem;
        text-shadow: #fde069 1px 2px;
    }
`

export const StyledLabel = styled.label`
    color: black;
`

/* Styling for the review component */

export const ShowReviewContainer = styled.div`
    border: 5px solid black;
    border-radius: 10px;
    padding: 10px;
`

export const ShowReviewP = styled.p`
    
`

export const StyledServiceAveragesContainer = styled.div`
    margin-top: 400px;
`

export const StyledH3 = styled.h3`

`

export const DatePickerContainer = styled.div`
    margin-top: 1rem;
    margin-left: 0.5rem;
`

export const StyledDatePicker = styled(DatePicker)`

`

export const CarouselContainer = styled.div`
    position: absolute;
    top: 52%;
    left: 34.5%;

    @media screen and (max-width: 500px) {
        position: absolute;
        top: 25%;
        left: 50%
    }
`

export const StyledCarouselComponent= styled(StyledCarousel)`
    
`

export const StyledP = styled.p`
    color: white;
    font-size: .75rem;
`

export const StyledCarouselItem = styled.div`
    height: 400px;
    width: 300px;
    padding-top: 3rem;
    text-align: center;
    background: black;
    border: 4px solid #fde069;
    color: white;
    font-size: 12px;
    text-transform: uppercase;
    border-radius: 10px;


    @media screen and (max-width: 800px) {
        height: 400px;
        width: 220px;
    }
`