import React from 'react'
import Table from "@components/Table"
//import Fondodecalificaciones from '../../../img/fondodecalificaciones.png';

const Notes = () => {
  return ( 
    <div 
      className='relative flex flex-col items-center gap-20 p-20 justify-center z-10 bg-primary-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100'
      style={{
        backgroundImage:"url(/fondodecalificaciones.png)",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      >
      <div className='flex flex-row gap-4 '>
      
      </div>
      <div>
        Regresar
        <Table/>
      </div>
    </div> 
  )
  
}

export default Notes