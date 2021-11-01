import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/">Who we are</FooterLink>
                            <FooterLink to="/">Reviews</FooterLink>
                            <FooterLink to="/">Programs</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Careers</FooterLinkTitle>
                            <FooterLink to="/">Jobs</FooterLink>
                            <FooterLink to="/">Company Values</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Community</FooterLinkTitle>
                            <FooterLink to="/">Community Programs</FooterLink>
                            <FooterLink to="/">Advice</FooterLink>
                            <FooterLink to="/">How we started</FooterLink>
                            <FooterLink to="/">FAQs</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Instagram</FooterLink>
                            <FooterLink to="/">LinkedIn</FooterLink>
                            <FooterLink to="/">YouTube</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
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
                </SocialMedia>
                <WebsiteRights>Juan Of A Kind © {new Date().getFullYear()}</WebsiteRights>
                <WebsiteRights>"Un brindo por aquel 'taco' que hizo emepezar todo" - AG </WebsiteRights>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
