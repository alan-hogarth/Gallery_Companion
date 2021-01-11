import { useState, useEffect} from 'react';
import { getAllObjects, getItemDetails} from '../helpers/GalleryService';
import GalleryCollection from '../components/GalleryCollection';
import SearchForm from '../components/SearchForm';
import ItemDetails from '../components/ItemDetails';

function GalleryContainer() {

  const [objects, setObjects] = useState([]);
  const [artworkFilter, setArtworkFilter] = useState([]);
  const [itemDetails, setItemDetails] = useState({});

  useEffect(() => {
    getAllObjects().then((data) =>{
      setObjects(data.artObjects)
      setArtworkFilter(data.artObjects)
    })
  }, []);

  useEffect(() => {
    getItemDetails().then((data) =>{
      setItemDetails(data.artObject)
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
    <ItemDetails itemDetails={itemDetails}/>
    </>
  );
}

export default GalleryContainer;
