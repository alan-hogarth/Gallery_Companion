const FavouriteItem = ({artwork, removeFavourite}) => {

    const deleteButton = () => {
        removeFavourite(artwork._id)  
    }
     
    return(
        <div className="galleryObject">
            <div className="galleryObjectImage">
                <img src={artwork.object.webImage["url"]} alt={artwork.object.title} title={artwork.object.title}/>
            </div>
            <p>Title: {artwork.object.title}</p>
            <p>By: {artwork.object.principalOrFirstMaker}</p>
            <button className="delete" onClick={deleteButton}>Delete</button>
        </div>
    )
};

export default FavouriteItem;