import { useState, useEffect} from 'react';
import { getAllObjects } from '../helpers/GalleryService';
import GalleryCollection from '../components/GalleryCollection';
import SearchForm from '../components/SearchForm';

function GalleryContainer() {

  const [objects, setObjects] = useState([]);
  const [artworkFilter, setArtworkFilter] = useState([]);

  useEffect(() => {
    getAllObjects().then((data) =>{
      setObjects(data.artObjects)
      setArtworkFilter(data.artObjects)
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
    <GalleryCollection collection={artworkFilter} />
  
    </>
  );
}

export default GalleryContainer;
