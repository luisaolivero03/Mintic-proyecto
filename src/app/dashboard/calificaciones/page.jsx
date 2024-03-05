"use client";
import React from 'react';
import Table from "@components/Table";
import Button from '@mui/material/Button';
import Link from 'next/link';
import useAppContext from "@hooks/useAppContext";

const data1 = {
  username: "Camilo",
  id: 1002211875,
  role: "Student",
};
const data2 = {
  username: "Luisa",
  id: 1002211876,
  role: "Teacher",
};

const Notes = () => {
  const { user } = useAppContext(); // Asegúrate de que este hook esté disponible

  return (
    <div className='relative flex flex-col items-center gap-20 p-20 justify-center z-10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100'
      style={{
        backgroundImage: "url(/fondodecalificaciones.png)",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        margin: '0 auto',
        display: 'flex',  
        flexDirection: 'column', // Columna principal
        alignItems: 'center', // Alinear al centro horizontalmente
      }}
    >
      <div className="flex justify-between w-full">
        {/* Botón para regresar al login */}
        <Link href="/dashboard" passHref>
          <Button
            variant="contained"
            disableElevation
          >
            Regresar al Login
          </Button>
        </Link>
      
        {/* Botón para agregar/modificar nota solo para profesores */}
        {user.role === "teacher" && (
          <Button
            variant="contained"
            disableElevation
          > Modificar nota </Button>
        )}
      </div>  
      {/* Tabla centrada */}
      <Table style={{ margin: 'auto' }} />
    </div> 
  );
}

export default Notes;