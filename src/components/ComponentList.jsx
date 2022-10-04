import { Button } from '@mui/material';
import React from 'react';
import DraggableComponent from './DraggableComponent';

function ComponentList() {
  return (
    <div className='component-list'>
      <DraggableComponent tag='button'>
        <Button variant='contained' disabled>
          Button
        </Button>
      </DraggableComponent>
    </div>
  );
}

export default ComponentList;
