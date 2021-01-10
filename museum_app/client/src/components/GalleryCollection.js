import GalleryItem from "./GalleryItem";
import Glide from "@glidejs/glide";
import { useEffect } from "react";
import '../css/glide.core.css';

const GalleryCollection = ({collection}) => {

    const slider = new Glide('.glide');
    
    useEffect(() => {
        return () => slider.mount()
    }, [slider]);


    const objectNodes = collection.map((object) =>{
       return (
                <GalleryItem object={object}/>
        );
    })
    return(
        <div>
            <div class="glide">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                    <li class="glide__slide">0</li>
                    <li class="glide__slide">1</li>
                    <li class="glide__slide">2</li>
                    </ul>
                </div>
                <div class="glide__arrows" data-glide-el="controls">
                    <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                    <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                </div>
            </div>
            {objectNodes}
        </div>
    )

};

export default GalleryCollection;