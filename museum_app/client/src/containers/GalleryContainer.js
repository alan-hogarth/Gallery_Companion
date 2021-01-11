import { useState, useEffect} from 'react';
import { getAllObjects, getItemDetails} from '../helpers/GalleryService';
import GalleryCollection from '../components/GalleryCollection';
import SearchForm from '../components/SearchForm';


function GalleryContainer() {

  const [objects, setObjects] = useState([]);
  const [artworkFilter, setArtworkFilter] = useState([]);
  const [itemDetails, setItemDetails] = useState(null); // itemDetails is used for conditional rendering of the data in GalleryCollection

  useEffect(() => {
    getAllObjects().then((data) =>{
      setObjects(data.artObjects)
      setArtworkFilter(data.artObjects)
    })
  }, []);

  const viewItemDetails = idToView => {
    getItemDetails(idToView)
    .then((data) => {
      setItemDetails(data)
    })
  }

  const handleUserFilterAll = (userInput) => {
    const artworkDetails = objects.filter((artwork) => {
      return artwork.longTitle.toUpperCase().includes(userInput.toUpperCase())
    })
    setArtworkFilter(artworkDetails)
  };

  return (
    <>  
    <SearchForm onUserInput={handleUserFilterAll}/>
    <GalleryCollection collection={artworkFilter} viewItemDetails={viewItemDetails} itemDetails={itemDetails}/>

    </>
  );
}

export default GalleryContainer;
