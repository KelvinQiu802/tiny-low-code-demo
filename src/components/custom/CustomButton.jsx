import { Button } from '@mui/material';
import React from 'react';

function CustomButton({ text, style, variant }) {
  return (
    <div>
      <Button sx={{ width: '100%', height: '100%' }} variant={variant}>
        {text}
      </Button>
    </div>
  );
}

export default CustomButton;
