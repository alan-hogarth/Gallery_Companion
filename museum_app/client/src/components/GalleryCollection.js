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
        focusAt: 1,
        rewind: false,
        breakpoints: {
            1600: {
                perView:3
            },
            800: {
                perView: 2
            },
            500: {
                perView: 1
            }
        }
    };

    let slider =  new Glide('.glide', sliderConfig);
    
    useEffect(() => {
        if (itemDetails) {
            const startIndex =  collection.findIndex(item => itemDetails.artObject.objectNumber === item.objectNumber );
            slider.update({focusAt: 1, startAt: startIndex+1});
        }

        slider.mount()
        return () => slider.mount()
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

                        <li className="glide__slide"> 
                            <p>Welcome to Art Companion and today's gallery.</p>
                            <p>Please use the "Next" button to begin your gallery journey.</p>
                            <p>You can use the search bar to browse the gallery for specific pieces, artists, period or year... Click "Next" to view your filtered Gallery.</p>
                            <p>You can access addtional information about any given piece by clicking "more..."</p>
                            <p>In addition, you may like to save certain pieces and create your own gallery of favourites. To do this, simply click the "Favourtite" button under any art piece.</p>
                            <p>We hope you enjoy your journey.</p>
                        </li>
                        {objectNodes}
                        <li className="glide__slide">
                            <p>You have reached the end of today's gallery.</p>
                            <p>We hope you enjoyed the journy.</p>
                            <p>Please click either the "Start" button, which will return you to the start, or the "Prev" button to revisit your journey through the gallery.</p>
                        </li>
                    </ul>
                </div>
                <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--start" data-glide-dir="<<">Start</button>
                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                   <button className="glide__arrow glide__arrow--end" data-glide-dir=">>">End</button>
                </div>
            </div>
        </div>
        {renderItemDetails()}
        </>
    )

};

export default GalleryCollection;