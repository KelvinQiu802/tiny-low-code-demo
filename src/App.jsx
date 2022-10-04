import './App.css';
import Canvas from './components/Canvas';
import ComponentList from './components/ComponentList';
import PropertyList from './components/PropertyList';
import React from 'react';

function App() {
  const [data, setData] = React.useState([
    {
      tag: 'button',
      style: {
        position: 'absolute',
        width: 100,
        height: 30,
        top: 0,
        left: 0,
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
