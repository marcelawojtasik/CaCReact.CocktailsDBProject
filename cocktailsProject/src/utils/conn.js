const API = 'https://www.thecocktaildb.com/api/json/v1/1'

export const getDrink = (path) => {
    return fetch (API+path).then((response)=>response.json())
}