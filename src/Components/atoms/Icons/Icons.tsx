import React from 'react';

interface Props{
  source:string;
}

function Icons(props:Props) {
  return (
    <img src={props.source} alt="try"></img>
  )
}

export default Icons
