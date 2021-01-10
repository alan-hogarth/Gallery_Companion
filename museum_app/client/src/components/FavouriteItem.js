const FavouriteItem = ({artwork, removeFavourite}) => {

    const deleteButton = () => {
        removeFavourite(artwork._id)  
    }
     

    return(
        <div>
            <p>Title: {artwork.object.title}</p>
            <p>By: {artwork.object.principalOrFirstMaker}</p>
            <img src={artwork.object.webImage["url"]} width="400" height="300" alt={artwork.object.title}/>
            <br></br>
            <button onClick={deleteButton}>Delete</button>
        </div>
    )
};

export default FavouriteItem;