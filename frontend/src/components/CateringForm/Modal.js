import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { StyledModalButton, CateringFormInformation, CateringFormInformationTitle, CateringFormInformationSubtitle } from './CateringFormElements';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <CateringFormInformation>
            <CateringFormInformationTitle>
            Service Fee:
            </CateringFormInformationTitle>
            <CateringFormInformationSubtitle>
            15% from the total amount at the end of the event.
            </CateringFormInformationSubtitle>
            <CateringFormInformationTitle>
            Service Fee Includes:
            </CateringFormInformationTitle> 
            <CateringFormInformationSubtitle>
            Cost of Driving to the location of your event.
            2 hours or serving food provided at the event.
            Credit Card transaction fees.
            </CateringFormInformationSubtitle>
            <CateringFormInformationTitle>
            Drive to you:
            </CateringFormInformationTitle>
            <CateringFormInformationSubtitle>
            Currently this only applies to Salt Lake and Utah County, as we expa    our services maavailable elsewhere. Feel                free to follow  on our social media's to get the latest updatewhat we're up to!
            </CateringFormInformationSubtitle>
            <CateringFormInformationTitle>
            Additional hours:
            </CateringFormInformationTitle>
            <CateringFormInformationSubtitle>
            If you will want or need any additional hours, the cost will be $100/hr.
            </CateringFormInformationSubtitle>
            <CateringFormInformationTitle>
            Cancellation Policy:
            </CateringFormInformationTitle>
            <CateringFormInformationSubtitle>
            If you must cancel your catering reservation instead of rescheduling,   will issues a 50% reup    until 14 days                before the plan date. If you must cancel before that time, we can ieither a 25%  ref or a 50% refund in Juan                  Of A Kind Gift Cards.
            </CateringFormInformationSubtitle>
        </CateringFormInformation>
      <SimpleModal />
    </div>
  );

  return (
    <div>
      <StyledModalButton type="button" onClick={handleOpen}>
        Service Fees and Catering Info
      </StyledModalButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
