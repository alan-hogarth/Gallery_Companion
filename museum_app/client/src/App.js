import { useState, useEffect} from 'react';
import './App.css';
import { getAllObjects } from './helpers/GalleryService';
import GalleryCollection from './components/GalleryCollection';

function App() {

  const [objects, setObjects] = useState([]);

  useEffect(() => {
    getAllObjects().then((data) =>{
      setObjects(data.artObjects)
    })
  }, []);

  return (
    <>
    <h1>IT WORKS! by Bob</h1>
    <GalleryCollection collection={objects}/>
    </>
  );
}

export default App;
