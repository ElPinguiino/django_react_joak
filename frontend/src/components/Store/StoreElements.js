import styled from 'styled-components'

export const StoreContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;

    @media screen and (max-width: 768px) {
        height: 1600px;
    }

    @media screen and (max-width: 480px) {
        height: 1600px;
    }
`

export const StoreWrapper = styled.div`
    max-width: 1000px;
    height: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 1rem;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
        margin-bottom: 20rem;
    }

    @media screen and (max-width: 480px) {
        margin-bottom: ;
    }
`

export const StoreCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2 ease-in-out;

    &:hover {
        transform: scale(1.10);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        margin-top: 6rem;
    }
`
export const StoreIcon = styled.img`
    height: 320px;
    width: 160px;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {

    }

    @media screen and (max-width: 480px) {
        height: 160px;
        width: 160px;
    }
`

export const StoreH1 = styled.h1`
    font-size: 3rem;
    color: #fde069;
    margin-top: 3rem;
    text-shadow: white 1px 2px;

    @media screen and (max-width: 768px) {
        margin-top: -18rem;
    }

    @media screen and (max-width: 480px) {
        margin-top: -10rem;
    }
    
`

export const StoreH2 = styled.h2`
    font-size: 1rem;
    color: #29f9fc;
    margin-bottom: 10px;
`

export const StoreP = styled.p`
    font-size: 1rem;
    color: black;
    text-align: center;
`