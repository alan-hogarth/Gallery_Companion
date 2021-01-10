const URL = 'https://www.rijksmuseum.nl/api/en/collection/?key=kn4V2P7G&ps=10&toppieces=true&hasImage=true'
const localURL = 'http://localhost:3000/api/objects/'

export const getAllObjects = ()=>{
    return fetch(URL)
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

export const deleteFavourites = (id) => {
    return fetch(localURL + id, {
        method: 'DELETE'
    })
}