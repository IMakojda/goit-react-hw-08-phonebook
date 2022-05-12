import * as React from 'react';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { IcButton } from './IconButton.styled';

export default function IconButtons({ func }) {

  return (
    <Stack direction="row" spacing={1} >
      <IcButton aria-label="delete" onClick={func} size="large">
        <DeleteIcon fontSize="inherit" />
      </IcButton>
    </Stack >
  );
}