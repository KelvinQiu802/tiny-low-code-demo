import './App.css';
import Canvas from './components/Canvas';
import ComponentList from './components/ComponentList';
import PropertyList from './components/PropertyList';
import React from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [data, setData] = React.useState([
    {
      tag: 'button',
      id: nanoid(),
      props: {
        text: 'Hello',
        variant: 'outlined',
        style: {
          position: 'absolute',
          width: 100,
          height: 30,
          top: 300,
          left: 300,
        },
      },
    },
  ]);

  return (
    <div className='App'>
      <ComponentList />
      <Canvas data={data} setData={setData} />
      <PropertyList />
    </div>
  );
}

export default App;
