import { useSpeechSynthesis } from 'react-speech-kit';
import React, { useState } from 'react';

const ItemDetails = ({itemDetails}) => {
    
    const [value, setValue] = useState(itemDetails.artObject.plaqueDescriptionEnglish);
    const { speak } = useSpeechSynthesis();
    
    return(
        <>
        <p>{itemDetails.artObject.plaqueDescriptionEnglish}</p>
        <textarea
            value={value}
            onChange={(event) => setValue(event.target.value)}
            />
            <button onClick={() => speak({ text: value })}>Click for Audio</button>
        </>
    )
};

export default ItemDetails;