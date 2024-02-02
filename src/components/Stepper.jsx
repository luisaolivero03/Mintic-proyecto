import React from 'react'

const Stepper = ({step, children}) => {
  return (
    <div>
        {children[step]}
    </div>
  )
}

export default Stepper

/*
<Stepper step={0}>
    <Botones/> children[0]
    <Formularios /> children[1]
</Stepper>

*/