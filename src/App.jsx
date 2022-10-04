import './App.css';
import Canvas from './components/Canvas';
import ComponentList from './components/ComponentList';
import PropertyList from './components/PropertyList';

function App() {
  return (
    <div className='App'>
      <ComponentList />
      <Canvas />
      <PropertyList />
    </div>
  );
}

export default App;
