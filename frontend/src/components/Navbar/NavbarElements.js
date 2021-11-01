import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px:

    @media screen and (max-width: 450px) {
        
    }
`
export const NavLogoImage = styled.img`
    o-object-fit: cover;
    object-fit: cover;
    height: 8rem;
    width: 8rem;
    position: sticky;

    @media screen and (min-width: 1550px) {
        height: 12rem;
        width: 12rem;
    }

    @media screen and (max-width: 950px) {
        margin-right: 2rem;
        margin-left: -2rem;
    }
`

export const NavLogo = styled(LinkR)`
    color: #29f9fc;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-left: -5rem;
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 900px) {
        margin-right: 4.5rem;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 850px) {
        display: block;
        position: absolute;
        margin-right: 2rem;
        margin-top: 34px;
        top: 0;
        right: 0;
        transform translate{-100%, 46%};
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-itmes: center;
    list-syle: none;
    text-align: center;
    margin-top: 10px;
    margin-right: -22px;
    list-style-type: none;

    @media screen and (max-width: 850px) {
        display: none;
    }
`
export const NavItem = styled.li`
    height: 80px;
    font-size: 1.25rem;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;

    &.active {
        border-bottom: 3px solid #29f9fc;
    }

    @media screen and (max-width: 1100px) {
        font-size: 1.15rem;
        padding: 0 0.5rem;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 850px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #29f9fc;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    margin-top: 15px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010686;
    }

    @media screen and (max-width: 1100px) {
        font-size: 15px;
        padding: 8px 18px;
    }


    @media screen and (max-width: 950px) {
        font-size: 12px;
        font-weight: 400;
        padding: 8px 18px;
    }

    @media screen and (max-width: 720px) {
        font-size: 10px;
        padding: 8px 18px;
    }
`