import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));



export const StyledFilterButtonsContainer = styled.div`
  margin-top: 80px;
  height: 80px;
  background-color: white;
  width: 100%;
`

export const StyledFilterButton = styled.button`
  border-radius: 50px;
  background: #fde069;
  white-space: nowrap;
  padding: 14px 48px;
  color: black;
  font-size: 16px;
  outline: none:
  border: none;
  cursor: pointer:
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
`