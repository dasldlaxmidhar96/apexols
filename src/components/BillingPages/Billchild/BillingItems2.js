import * as React from 'react';
import { Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Stack } from '@mui/system';


export default function ColumnGroupingTable() {
 
  return (
    <Stack sx={{ ml:1, mr:1 }}>
    <Paper>
      <TableContainer>
        <Table arial-aria-label='simple table' sx={{ border:1 }}>
          <TableHead>
            <TableRow sx={{bgcolor: '	#89CFF0', '&:last-child td, &:last-child th': { border:0 } }}>
              <TableCell align='left'>#</TableCell>
              <TableCell align='left'>Type</TableCell>
              <TableCell align='left'>Name</TableCell>
              <TableCell align='right'>Unit Price</TableCell>
              <TableCell align='right'>Quantity</TableCell>
              <TableCell align='right'>Discount</TableCell>
              <TableCell align='right'>Total</TableCell>
              <TableCell align='right'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <TableCell align='left'>1</TableCell>
              <TableCell align='left'><select><option>Name</option></select></TableCell>
              <TableCell align='left'>Consultation-Dr.TV Raja</TableCell>
              <TableCell align='right'>200</TableCell>
              <TableCell align='right'>1</TableCell>
              <TableCell align='right'>0</TableCell>
              <TableCell align='right'>200</TableCell>
              <TableCell align='right'>&#x2715;</TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    </Stack>
  );
}
