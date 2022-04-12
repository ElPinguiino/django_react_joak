import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 100%;
  left: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 725px;
  height: 800px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  background: #fde069;
  color: #000;
  border: 3px solid black;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  padding: 40px 20px 20px 20px;

  @media screen and (max-width: 500px) {
      width: 350px;
      height: 1300px;
  }
`;

export const ModalContent = styled.div`
  justify-content: center;
  align-items: center;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const CateringFormInformation = styled.div`
    margin-top: -1rem;
`

export const CateringFormInformationTitle = styled.h3`
    font-size: 1.25rem;
    padding: .25rem;
`

export const CateringFormInformationSubtitle = styled.p`
    padding: .25rem;
`

export const CateringFormInformationSubtitleBold = styled.p`
    padding: .25rem;
    font-weight: bold;
`