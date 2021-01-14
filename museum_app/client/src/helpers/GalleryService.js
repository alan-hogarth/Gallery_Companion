import api_key from "../api_key";

const userKey = api_key()

const collectionURL = `https://www.rijksmuseum.nl/api/en/collection/?key=${userKey}&ps=100&toppieces=true&hasImage=true`;

const localURL = 'http://localhost:3000/api/objects/'

export const getAllObjects = ()=>{
    return fetch(collectionURL)
    .then(res => res.json())

};

export const getItemDetails = (idToView)=>{

    return fetch(`https://www.rijksmuseum.nl/api/en/collection/${idToView}?key=${userKey}`)
    .then(res => res.json())
};

export const getAllFavourites = ()=>{
    return fetch(localURL)
    .then(res => res.json())
};

export const addToFavourites = (data)=>{ 
    return fetch(localURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
};

export const deleteFavourite = (id) => {
    return fetch(localURL + id, {
        method: 'DELETE'
    })
}