import { useSpeechSynthesis } from 'react-speech-kit';
import React, { useState } from 'react';
import Speech from 'react-speech';

const ItemDetails = ({itemDetails}) => {
    
    const [value, setValue] = useState(itemDetails.artObject.plaqueDescriptionEnglish);
    const { speak, cancel } = useSpeechSynthesis();
    
    const style = {
        container: { },
        text: { },
        buttons: { },
        play: {
          hover: {
            backgroundColor: 'GhostWhite'
          },
          button: {
            cursor: 'pointer',
            pointerEvents: 'none',
            outline: 'none',
            backgroundColor: 'Gainsboro',
            border: 'solid 1px rgba(255,255,255,1)',
            borderRadius: 6
          }
        },
        pause: {
          play: { },
          hover: { }
        },
        stop: {
            play: { 
                hover: { },
                button: { }
            },
            resume: {
                play: {
                    hover: { },
                    button: { }
                }
            }
        }
    };

    return(
        <div className="galleryDescription">
        <img src={itemDetails.artObject.webImage['url']} height="150" width="180"/>
            <ul>
                <li>{itemDetails.artObject.longTitle}</li>
                <li>{itemDetails.artObject.plaqueDescriptionEnglish}</li>
            </ul>
                <input 
                type="hidden" 
                value={itemDetails.artObject.plaqueDescriptionEnglish}
                onChange={(event) => setValue(event.target.value)}
                />
                <button onClick={() => speak({ text: itemDetails.artObject.plaqueDescriptionEnglish })}>Click for Audio</button>
                <button type="button" onClick={cancel}>
                    Stop Audio
                </button> 

       </div>
    )
};

export default ItemDetails;


  


// <li><Speech 
// // styles={style}
// voice="Google UK English Male"
// pause={true} 
// resume={true} 
// stop={true}
// text={itemDetails.artObject.plaqueDescriptionEnglish}/></li>
