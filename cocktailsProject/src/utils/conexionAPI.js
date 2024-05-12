const API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const get = () => {
    return fetch (API).then((response)=>response.json())
}
export const get2 = (path) => {
    return fetch (API+path).then((response)=>response.json())
}


