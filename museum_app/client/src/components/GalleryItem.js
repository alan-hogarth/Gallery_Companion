import { addToFavourites } from '../helpers/GalleryService';

const GalleryItem = ({object, viewItemDetails}) => {

    const postToFavourites = (event) => {
        event.preventDefault();
        addToFavourites({object})  
    }
     
    const getItemID = () => {
        viewItemDetails(object.objectNumber)  
        //console.log(object.objectNumber);
    }

    return(
        <div class="galleryObject">
            <div class="galleryObjectImage">
                <img src={object.webImage["url"]} alt={object.title} title={object.title}/>
            </div>
            <p>Title: {object.title}, {object.longTitle.match(/\d+/)}</p>
            <p>By: {object.principalOrFirstMaker} </p>
            <button onClick={getItemID}>more...</button>
            <br></br>
            {/* <button onClick={postToFavourites}>Favourite</button> */}
        </div>
    )
};

export default GalleryItem;