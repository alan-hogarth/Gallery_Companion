import GalleryItem from "./GalleryItem";
import Glide from "@glidejs/glide";
import { useEffect } from "react";
import '../css/glide.core.css';
import '../css/glide.theme.css';
import '../css/style.css';
import ItemDetails from '../components/ItemDetails';

const GalleryCollection = ({collection, viewItemDetails, itemDetails}) => {
    let sliderConfig = {
        perView: 3,
        startAt: 0,
        rewind: false,
        breakpoints: {
            800: {
                perView: 2
            },
            400: {
                perView: 1
            }
        }
    };

    let slider =  new Glide('.glide', sliderConfig);

    if (itemDetails) {
        sliderConfig["startAt"] = collection.findIndex(item => itemDetails.artObject.objectNumber === item.objectNumber )
        //slider.mount();

        console.log("itemDetails.artObject.objectNumber = ", itemDetails.artObject.objectNumber)

        console.log(sliderConfig["startAt"])
        console.log(slider.focusAt)

    }
    
    useEffect(() => {
        if (itemDetails) {
            const startIndex =  collection.findIndex(item => itemDetails.artObject.objectNumber === item.objectNumber );
            slider.update({ startAt: startIndex});
        }
        slider.mount()
        //return () => slider.mount()
    }, [slider, itemDetails, collection]);

    const objectNodes = collection.map((object, index) =>{
       return (
            <li className="glide__slide" key={index}>
                <GalleryItem object={object} viewItemDetails={viewItemDetails} />
            </li>
        );
    })

    const renderItemDetails = () => {
        if ( itemDetails ){
            return (<ItemDetails itemDetails={itemDetails}/>)
        } 
        return null;
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