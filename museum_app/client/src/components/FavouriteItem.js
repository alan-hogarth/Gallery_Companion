const FavouriteItem = ({artwork, removeFavourite}) => {

    const deleteButton = () => {
        removeFavourite(artwork._id)  
    }
     
    return(
        <div class="galleryObject">
            <div class="galleryObjectImage">
                <img src={artwork.object.webImage["url"]} alt={artwork.object.title} title={artwork.object.title}/>
            </div>
                <p>Title: {artwork.object.title}</p>
                <p>By: {artwork.object.principalOrFirstMaker}</p>
                <br />
                <button onClick={deleteButton}>Delete</button>
        </div>
    )
};

export default FavouriteItem;