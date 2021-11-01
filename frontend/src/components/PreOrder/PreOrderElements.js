import styled from 'styled-components';

export const StyledPreOrderPageContainer = styled.div`
    background-color: yellow;
    height: 1000px;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`


export const StyledPreOrderFormContainer = styled.div`
    margin-top: 60px;
    width: 100%;
    background-color: black;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`
/* This is the container holding the front of the image of our card flip  */
export const StyledPreOrderFormWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 1200px;
    width: 100%;
    padding-top: 80px;
    max-width: 773px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

    @media screen and (max-width: 768px) {
        height: 1200px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
    }
`

/* Styling of Form  */

export const StyledPreOrderForm = styled.form`
    width: 100%;
    padding: 40px;
    box-sizing: border-box; 
    position: relative;
`

export const StyledInput = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    width: 15em;
    color: palevioletred;
    // background: #859398;
    border: 2px black solid;
    box-shadow: 5px 5px;
    border-radius: 10px;
`
export const StyledFieldSet = styled.fieldset`
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    background: ;
    box-shadow: 5px 5px;
    border: 1px solid white;
    border-radius: 5px;

    legend {
        padding: 0 10px;
        color: white;
    }

    label {
        padding-right: 10px;
        color: white;
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
    border: 2px white solid;
    border-radius: 10px;
    width: 100%;
    min-height: 100px;
    color: palevioletred;
    box-shadow: 5px 5px;
    resize: none;
`

export const StyledButton = styled.button`
    display: block;
    background-color: white;
    color: palevioletred;
    font-size: 1rem;
    border: black 1px solid;
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

export const StyledH2 = styled.h2`
    text-align: center;
    color: white;
    text-shadow: palevioletred 2px 4px;
    font-size: 2.5rem;
`

export const StyledLabel = styled.label`
    color: white;
`



/* Styling for Caterig Info inside of the Form Modal */
export const StyledModalContainer = styled.div`
    top: -1150px;
    position: relative;
    margin-right: auto;
    margin-left: 18rem;

    @media screen and (max-width: 768px) {
        top: -1150px;
        position: relative;
        margin-right: auto;
        margin-left: 18rem;
    }
`
