import { useState, useEffect} from 'react';
import { getAllFavourites, deleteFavourite } from '../helpers/GalleryService';
import FavouriteCollection from '../components/FavouriteCollection';

function FavouritesContainer() {

  const [objects, setObjects] = useState([]);

  useEffect(() => {
    getAllFavourites().then((data) =>{
      setObjects(data)
    })
  }, []);

  const removeFavourite = idToDelete => {
    // req to server to delete booking from DB
    deleteFavourite(idToDelete);

    // delete locally
    setObjects(objects.filter(object => object._id !== idToDelete));
  }

  return (
    <>  
      <FavouriteCollection artwork={objects} removeFavourite={removeFavourite}/>
    </>
  );
}

export default FavouritesContainer;