const URL = 'https://www.rijksmuseum.nl/api/en/collection/?key=kn4V2P7G&ps=10&toppieces=true&hasImage=true'

export const getAllObjects = ()=>{
    return fetch(URL)
    .then(res => res.json())

};