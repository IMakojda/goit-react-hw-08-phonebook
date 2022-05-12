import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ContactItem from './ContactItem';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 25,
  },
}));

export default function ContactsList({ contactsList }) {

  return (
    contactsList.length > 0 ? <div component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Phone Number</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactsList.map((contact) => (
            <ContactItem
              nameItem={contact.name}
              numberItem={contact.number}
              id={contact.id}
              key={contact.id}
            />

          ))}
        </TableBody>
      </Table>
    </div >
      :
      <div>
        <p>
          Please add your contacts to phoneBook
        </p>
      </div>
  )
};
