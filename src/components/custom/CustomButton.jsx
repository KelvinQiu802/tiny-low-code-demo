import { Button } from '@mui/material';
import React from 'react';

function CustomButton({ id, text, style, variant, select }) {
  return (
    <div onClick={() => select(id)}>
      <Button sx={{ width: 1, height: style.height }} variant={variant}>
        {text}
      </Button>
    </div>
  );
}

export default CustomButton;
