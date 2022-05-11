import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function OutlinedButtons({ text, func, type = 'button' }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button type={type} variant="outlined" onClick={func}>{text}</Button>
    </Stack>
  );
}