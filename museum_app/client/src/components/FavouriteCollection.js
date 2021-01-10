import FavouriteItem from "./FavouriteItem";

const FavouriteCollection = ({artwork, removeFavourite}) => {
    const objectNodes = artwork.map((object) =>{
       return (<FavouriteItem artwork={object} removeFavourite={removeFavourite}/>);
    })
    return(
        <div>
            {objectNodes}
        </div>
    )
};

export default FavouriteCollection;