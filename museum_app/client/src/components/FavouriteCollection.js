import FavouriteItem from "./FavouriteItem";
import Glide from "@glidejs/glide";
import '../css/glide.core.css';
import '../css/glide.theme.css';
import { useEffect } from "react";

const FavouriteCollection = ({artwork, removeFavourite}) => {

    const sliderConfig = {
        perView: 3
    };

    const slider = new Glide('.glide', sliderConfig);
    
    useEffect(() => {
        return () => slider.mount()
    }, [slider]);

    const objectNodes = artwork.map((object, index) =>{
        return (
            <li className="glide__slide">
                <FavouriteItem artwork={object} removeFavourite={removeFavourite} key={index}/>
            </li>    
        );
    })
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
        </>
    )
};

export default FavouriteCollection;