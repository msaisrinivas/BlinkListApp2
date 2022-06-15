import React from 'react';
import { IconButton } from '@mui/material';

interface Props{
  children: React.ReactNode;
  disabled:boolean,
  onClick: ()=>void,
  icon?: any,
}

function IconButtons(props:Props) {
  return(
  <IconButton color="primary" disabled={props.disabled} onClick={props.onClick}>
    {props.children}
  </IconButton>);
}

export default IconButtons;