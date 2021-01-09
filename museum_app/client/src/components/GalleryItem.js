const GalleryItem = ({object}) => {
    return(
        <div>
            <p>Title: {object.title}</p>
            <p>By: {object.principalOrFirstMaker}</p>
            <img src={object.webImage["url"]} width="400" height="300" alt={object.title}/>
        </div>
    )
};

export default GalleryItem;