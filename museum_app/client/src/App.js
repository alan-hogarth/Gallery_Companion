import { useState, useEffect} from 'react';
import './App.css';
import { getAllObjects } from './helpers/GalleryService';
import GalleryCollection from './components/GalleryCollection';

function App() {

  const [objects, setObjects] = useState([]);
  const [artworkFilter, setArtworkFilter] = useState([]);

  useEffect(() => {
    getAllObjects().then((data) =>{
      setObjects(data.artObjects)
    })
  }, []);

  const handleUserFilterAll = (userInput) => {
    const artworkDetails = objects.filter((artwork) => {
      return artwork.longTitle.toUpperCase().includes(userInput.toUpperCase())
    })
    setArtworkFilter(artworkDetails)
  };

  return (
    <>  
    <SearchForm onUserInput={handleUserFilterAll}/>
    <GalleryCollection collection={objects} />
  
    </>
  );
}

export default App;
