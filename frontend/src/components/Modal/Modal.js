import React, { useRef, useEffect, useCallback } from 'react';
import { Container, Button } from './ModalElements';
import { useSpring, animated } from 'react-spring';
import { Background, ModalWrapper, ModalImg, ModalContent, CloseModalButton } from './ModalElements';
import { StyledModalButton, CateringFormInformation, CateringFormInformationTitle, CateringFormInformationSubtitle, CateringFormInformationSubtitleBold } from './ModalElements';

const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();
  
    const animation = useSpring({
      config: {
        duration: 250
      },
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(-140%)` : `translateY(-135%)`
    });
  
    const closeModal = e => {
      if (modalRef.current === e.target) {
        setShowModal(false);
      }
    };
  
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && showModal) {
          setShowModal(false);
          console.log('I pressed');
        }
      },
      [setShowModal, showModal]
    );
  
    useEffect(
      () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
      },
      [keyPress]
    );
  
    return (
      <>
        {showModal ? (
          <Background onClick={closeModal} ref={modalRef}>
            <animated.div style={animation}>
              <ModalWrapper showModal={showModal}>
                <ModalContent>
                <CateringFormInformation>
                    <CateringFormInformationTitle>Service Fee:</CateringFormInformationTitle>
                        <CateringFormInformationSubtitle>25% of the total amount at the end of the event. The fee consists of service fee, driving fee, gratuity fee, set-up fee, and credit card transaction fees.</CateringFormInformationSubtitle>
                    <CateringFormInformationTitle>Service Fee Includes:</CateringFormInformationTitle> 
                        <CateringFormInformationSubtitle>
                        Cost of Driving to the location of your event (within Salt Lake and Utah County). 2 hours of serving food provided at the event.  Set up inside of venue fee for serving and Credit Card transaction fees. We require a 50% deposit in order to save the date and accept Cash, Venmo, and Card.
                        </CateringFormInformationSubtitle>
                    <CateringFormInformationTitle>Drive to you:</CateringFormInformationTitle>
                        <CateringFormInformationSubtitle>Currently, this only applies to Salt Lake and Utah County, as we expand our services available elsewhere. Feel free to follow us on our social media to get the latest update on what we're up to!</CateringFormInformationSubtitle>
                    <CateringFormInformationTitle>Additional hours:</CateringFormInformationTitle>
                        <CateringFormInformationSubtitle>If you will want or need any additional hours than the 2 that are included in the service fee, the cost will be $150/hr.</CateringFormInformationSubtitle>
                    <CateringFormInformationTitle>Condiments and Utensils</CateringFormInformationTitle>
                      <CateringFormInformationSubtitle>All orders will come with limes, onion, cilantro, and two types of salsas for the condiments provided. We will also provide disposable plates, napkins, and utensils. </CateringFormInformationSubtitle>
                    <CateringFormInformationTitle>Special Requests:</CateringFormInformationTitle>
                      <CateringFormInformationSubtitle>We will do our best to accommodate any special requests, while we specialize in birria, we are willing to give almost anything a try. If you are interested in seeing if we can accommodate a certain kind of request, please don’t hesitate to submit a request and we will get back to you ASAP!</CateringFormInformationSubtitle>
                    <CateringFormInformationTitle>Cancellation Policy:</CateringFormInformationTitle>
                        <CateringFormInformationSubtitle>If you must cancel your catering reservation instead and are not able to reschedule, we can issue a refund of up 75% if the reservation is canceled 14 days or more prior to the planned date. If you must cancel within 14 days or less of the planned date we can do a refund of up to 25% or a refund of 100% in Juan Of A Kind Gift Cards.</CateringFormInformationSubtitle>
                        <CateringFormInformationSubtitleBold>*** Please ensure that you are accounting for all the people that you would like to be served, our catering quotes are made and priced with the anticipation of making 110% of the number of people put in your request. For example, if you request a quote for 100 people, we will make enough food for up to 110 people and once we are out we will be done at the event. ***</CateringFormInformationSubtitleBold>
                </CateringFormInformation>
                </ModalContent>
                <CloseModalButton
                  aria-label='Close modal'
                  onClick={() => setShowModal(prev => !prev)}
                />
              </ModalWrapper>
            </animated.div>
          </Background>
        ) : null}
      </>
    );
  };

  export default Modal