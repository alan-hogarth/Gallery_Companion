const collectionURL = 'https://www.rijksmuseum.nl/api/en/collection/?key=kn4V2P7G&ps=10&toppieces=true&hasImage=true';
const itemURL ='https://www.rijksmuseum.nl/api/en/collection/SK-C-5?key=kn4V2P7G';
const localURL = 'http://localhost:3000/api/objects/'

export const getAllObjects = ()=>{
    return fetch(collectionURL)
    .then(res => res.json())

};

export const getItemDetails= ()=>{
    return fetch(itemURL)
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