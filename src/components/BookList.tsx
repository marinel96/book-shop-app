import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Make this a custom hook, for two reasons: testing, seperation of concerns.
function createData(
  BookName: string,
  PublishedYear: number,
  Author: string,
  Price: number,
  Id: number,
) {
  return { BookName, PublishedYear, Author, Price, Id };
}

const rows = [
  createData('Zonja Bovari', 2014, 'Gustav Flober', 900, 1),
  createData('Lahuta e Malesis', 1937, 'At Gjergj Fishta', 1500, 2),
  createData('Mengjese Lufte', 1997, 'Dhimiter Xhuvani', 800, 3),
  createData('Alkimisti', 1988, 'Paulo Coelho', 1200, 4),
  createData('Njeriu me top', 1997, 'Dritero Agolli', 900, 5),
];

const BookList: React.FC = () => {
  return (
// Use a clickable/selectable table in order to make the selection of a single book easier
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Books Name</TableCell>
            <TableCell align="right">Published Year</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.BookName}
              </TableCell>
              <TableCell align="right">{row.PublishedYear}</TableCell>
              <TableCell align="right">{row.Author}</TableCell>
              <TableCell align="right">{row.Price}</TableCell>
              <TableCell align="right">{row.Id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookList;
