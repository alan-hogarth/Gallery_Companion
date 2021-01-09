import GalleryItem from "./GalleryItem";

const GalleryCollection = ({collection}) => {
    const objectNodes = collection.map((object) =>{
       return (<GalleryItem object={object}/>);
    })
    return(
        <div>
            {objectNodes}
        </div>
    )
};

export default GalleryCollection;