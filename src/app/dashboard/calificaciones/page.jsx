"use client";
import React, { useState } from 'react';
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
  const { user } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log(`Buscar por: ${searchTerm}`);
  };

  return (
    <div className='relative flex flex-col items-center gap-10 p-20 justify-center z-10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100'
      style={{
        backgroundImage: "url(/fondodecalificaciones.png)",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <div className="flex w-full justify-between">
        <Link href="/dashboard" passHref>
          <Button
            variant="contained"
            disableElevation
          >
            Regresar al Login
          </Button>
        </Link>

        {user.role === "teacher" && (
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              variant="contained"
              disableElevation
              onClick={handleSearch}
            >
              Buscar
            </Button>

            <Button
              variant="contained"
              disableElevation
            >
              Descargar plantilla
            </Button>
          </div>
        )}
      </div>

      {user.role === "teacher" && (
        <Button
          variant="contained"
          disableElevation
          style={{ marginTop: '5px' }}
        >
          Subir plantilla de notas
        </Button>
      )}

      <Table style={{ margin: 'auto' }} />
    </div>
  );
}

export default Notes;