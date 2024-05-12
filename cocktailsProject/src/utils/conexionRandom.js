const API = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

export const getRandom = () => {
    return fetch (API).then((response)=>response.json())
}