import { useSpeechSynthesis } from 'react-speech-kit';
//import React, { useState } from 'react';
//import Speech from 'react-speech';

const ItemDetails = ({itemDetails}) => {
    
    const { speak, cancel } = useSpeechSynthesis();

    const textItem = () => {
        return (
            `This piece is titled ${itemDetails.artObject.title} 
            by ${itemDetails.artObject.principalOrFirstMaker} ',' created in ${itemDetails.artObject.dating.sortingDate} '..' ${itemDetails.artObject.plaqueDescriptionEnglish}`)
    }

    return(
        <div className="galleryDescription">
            <h3>{itemDetails.artObject.longTitle}</h3>
                <figure>
                <img id="smallImage" src={itemDetails.artObject.webImage['url']} alt={itemDetails.artObject.title} height="150" width="180"/>
                </figure>
            <ul> 
                <li>{itemDetails.artObject.plaqueDescriptionEnglish}</li>
            </ul>
                <button onClick={() => speak({ text: textItem() })}>▶️ Play Audio</button>
                <button type="button" onClick={cancel}>
                   ⏹ Stop Audio
                </button> 

       </div>
    )
};

export default ItemDetails;


  

