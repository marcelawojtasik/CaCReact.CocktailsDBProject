const API = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const get = (tragosId) => {
    return fetch (API+tragosId).then((response)=>response.json())
}