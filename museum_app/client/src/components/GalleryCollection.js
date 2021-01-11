import GalleryItem from "./GalleryItem";
import Glide from "@glidejs/glide";
import { useEffect } from "react";
import '../css/glide.core.css';
import '../css/glide.theme.css';
import '../css/style.css';

const GalleryCollection = ({collection}) => {
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
                <GalleryItem object={object}/>
            </li>
        );
    })
    return(
        <div class="gallery">
            <div class="glide">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        {objectNodes}
                    </ul>
                </div>
                <div class="glide__arrows" data-glide-el="controls">
                    <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                    <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                </div>
            </div>
        </div>
    )

};

export default GalleryCollection;