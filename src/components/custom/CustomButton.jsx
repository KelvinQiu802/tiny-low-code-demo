import { Button } from '@mui/material';
import React from 'react';

function CustomButton({ text, style, variant }) {
  return (
    <div>
      <Button sx={{ width: 1, height: style.height }} variant={variant}>
        {text}
      </Button>
    </div>
  );
}

export default CustomButton;
