import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function ColumnGroupingTable() {
 
  return (
    <Paper sx={{mt:2}}>
      <TableContainer>
        <Table>        
            <TableHead  sx={{border:1,  bgcolor: 'rgb(137, 207, 240)'}}>
              <TableRow>
                <TableCell >
                  #
                </TableCell>
                <TableCell>
                  Type
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Unit Price
                </TableCell>
                <TableCell>
                  Quantity
                </TableCell>
                <TableCell>
                  Discount
                </TableCell>
                <TableCell>
                  Total
                </TableCell>
                <TableCell>
                  
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

            </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
