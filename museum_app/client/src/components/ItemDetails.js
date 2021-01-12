import { useSpeechSynthesis } from 'react-speech-kit';
import React, { useState } from 'react';

const ItemDetails = ({itemDetails}) => {
    
    const [value, setValue] = useState(itemDetails.artObject.plaqueDescriptionEnglish);
    const { speak, cancel } = useSpeechSynthesis();
    
   

    return(
        <>
        <img src={itemDetails.artObject.webImage['url']} height="100" width="150"/>
        <p>{itemDetails.artObject.longTitle}</p>
        <p>{itemDetails.artObject.plaqueDescriptionEnglish}</p>
        <textarea 
            value={itemDetails.artObject.plaqueDescriptionEnglish}
            onChange={(event) => setValue(event.target.value)}
            />
            <button onClick={() => speak({ text: itemDetails.artObject.plaqueDescriptionEnglish })}>Click for Audio</button>
            <button type="button" onClick={cancel}>
                Stop
              </button>
        </>
    )
};

export default ItemDetails;