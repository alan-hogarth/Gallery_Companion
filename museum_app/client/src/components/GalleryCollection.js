import GalleryItem from "./GalleryItem";
import Glide from "@glidejs/glide";
import { useEffect } from "react";
import '../css/glide.core.css';
import '../css/glide.theme.css';
import '../css/style.css';
import ItemDetails from '../components/ItemDetails';

const GalleryCollection = ({collection, viewItemDetails, itemDetails}) => {
    const sliderConfig = {
        perView: 3
    };

    const slider = new Glide('.glide', sliderConfig);
    
    useEffect(() => {
        return () => slider.mount()
    }, [slider]);

    const objectNodes = collection.map((object) =>{
       return (
            <li class="glide__slide">
                <GalleryItem object={object} viewItemDetails={viewItemDetails}/>
            </li>
        );
    })

    const renderItemDetails = () => {
        if ( itemDetails ){
            return (<ItemDetails itemDetails={itemDetails}/>)
        } 
        return null
    }

    return(
        <>
        <div className="gallery">
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {objectNodes}
                    </ul>
                </div>
                <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                </div>
            </div>
        </div>
        {renderItemDetails()}
        </>
    )

};

export default GalleryCollection;