import { useState, useEffect} from 'react';
import { getAllFavourites } from '../helpers/GalleryService';
import GalleryCollection from '../components/GalleryCollection';
import SearchForm from '../components/SearchForm';

function FavouritesContainer() {

  const [objects, setObjects] = useState([]);
  const [artworkFilter, setArtworkFilter] = useState([]);

  useEffect(() => {
    getAllFavourites().then((data) =>{
      setObjects(data)
      setArtworkFilter(data)
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

export default FavouritesContainer;