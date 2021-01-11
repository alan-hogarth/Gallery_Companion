import { addToFavourites } from '../helpers/GalleryService';
import '../css/style.css';

const GalleryItem = ({object, viewItemDetails}) => {

    const postToFavourites = (event) => {
        event.preventDefault();
        addToFavourites({object})  
    }
     
    const getItemID = () => {
        viewItemDetails(object.objectNumber)  
    }

    return(
        <div class="galleryObject">
            <div class="galleryObjectImage">
                <img src={object.webImage["url"]} alt={object.title} title={object.title}/>
            </div>
            <p>Title: {object.title}, {object.longTitle.match(/\d+/)}</p>
            <p>By: {object.principalOrFirstMaker} <button class="more" onClick={getItemID}>more...</button></p>
            
            <button class="favourite" onClick={postToFavourites}>Favourite</button>
        </div>
    )
};

export default GalleryItem;