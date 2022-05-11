import FormAddContact from "components/FormContacts/FormContacts";
import * as React from 'react';
import ContactItem from "./ContactItem";
import { useFetchContactsQuery } from "Redux/ContactsReduser/ContactsSliceApi";
import { useSelector } from "react-redux";
import { Div } from "./Contactsview.styled";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FilterContacts from "components/Filter/FilterContacts";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 25,
  },
}));


const ContactsView = () => {
  const { data } = useFetchContactsQuery();
  const inputFilter = useSelector((state) => state.filter.filter);
  const contactList = data?.filter(item => item.name.toLowerCase().includes(inputFilter.toLowerCase()));

  return (
    <main>
      <Div>
        <FormAddContact />
        <FilterContacts />
      </Div>

      {contactList &&
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Phone Number</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contactList.map((contact) => (
                <ContactItem
                  nameItem={contact.name}
                  numberItem={contact.number}
                  id={contact.id}
                  key={contact.id}
                />

              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </main>
  );
}

export default ContactsView;