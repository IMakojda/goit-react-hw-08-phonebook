import *as React from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from "Redux/ContactsReduser/ContactsSliceApi";
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconButtons from 'components/Button/IconButton';
import { IconContact } from 'components/Icon/IconContacts.styled';
import { IconPhone } from 'components/Icon/IconPhone.styled';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 30,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const ContactItem = ({ nameItem, numberItem, id }) => {
  const [deleteContacts] = useDeleteContactMutation();

  return (
    <StyledTableRow key={id}>

      <StyledTableCell
        component="th"
        scope="row"
      >
        <IconContact sx={{ fontSize: 25 }} />
        {nameItem}
      </StyledTableCell>

      <StyledTableCell
        align="right"
      >
        <IconPhone sx={{ fontSize: 25 }} />
        {numberItem}
      </StyledTableCell>

      <StyledTableCell
        align="right"
      >
        <IconButtons func={() => deleteContacts(id)} />
      </StyledTableCell>

    </StyledTableRow>
  );
}

export default ContactItem;
ContactItem.propTypes = {
  nameItem: PropTypes.string.isRequired,
  numberItem: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
