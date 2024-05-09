import { get } from "../utils/conexionDetailsAPI"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

export const DrinkDetails = () => {    
    const [drink, setDrinks] = useState(null)
    const {tragosId} = useParams()
        
    useEffect(()=>{
        get(`${tragosId}`).then((data)=>{ 
            setDrinks(data.drinks)
        })    
    }, [tragosId])    
    if(!drink){        
        return (
            "Algo raro pasa..."
        )        
    }

    return(        
        <div className="detail">
            <Link to = {`/receta/${drink.map((drinks)=>drinks.idDrink)}`} >
            <img src = {drink.map((drinks)=>drinks.strDrinkThumb)} alt={drink.map((drinks)=>drinks.strCategory)} className="drinkImg"/>
            </Link>                         
            <div className="drinkDetail">            
                <div className="drink">                    
                    <h2 className="drinkName">{drink.map((drinks)=>drinks.strDrink)}</h2>
                    <p>Ingrediente principal: {drink.map((drinks)=>drinks.strIngredient1)}</p>
                    <p>{drink.map((drinks)=>drinks.strAlcoholic)}</p></div>
            </div>
        </div>
    )
}