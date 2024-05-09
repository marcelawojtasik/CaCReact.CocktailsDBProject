const API = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const get = () => {
    return fetch (API).then((response)=>response.json())
}



