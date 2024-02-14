import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, asignatura, grado, periodo1, periodo2, periodo3, periodo4) {
  return { name, asignatura, grado, periodo1, periodo2, periodo3, periodo4 };
}

const rows = [
  createData('1002154166', 'Matemáticas', 'Noveno', 90, 85, 78, 92),
  createData('1002154166', '', '', 0,0 , 0,0 ),
  createData('1002154166', '', '', 0,0 , 0,0 ),
  createData('1002154166', '', '', 0,0 , 0,0 ),
  createData('1002154166', '', '', 0,0 , 0,0 ),

  // Agrega más filas según sea necesario
];

export default function Calificaciones() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table"style={{ backgroundColor:"#BCECD1 "}}>
        <TableHead>
          <TableRow>
            <TableCell>Código</TableCell>
            <TableCell align="right">Asignatura</TableCell>
            <TableCell align="right">Grado</TableCell>
            <TableCell align="right">Periodo 1</TableCell>
            <TableCell align="right">Periodo 2</TableCell>
            <TableCell align="right">Periodo 3</TableCell>
            <TableCell align="right">Periodo 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.name} style={{ backgroundColor: "#FFFFFF " }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.asignatura}</TableCell>
              <TableCell align="right">{row.grado}</TableCell>
              <TableCell align="right">{row.periodo1}</TableCell>
              <TableCell align="right">{row.periodo2}</TableCell>
              <TableCell align="right">{row.periodo3}</TableCell>
              <TableCell align="right">{row.periodo4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
