import { getDrink } from "../utils/conn"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "../assets/css/DrinkDetails.css"

//PROBANDO CON STR, hay problema cuando el nombre es parte de otro
export const Taaaragos = () => {
    
    const [drink, setDrinks] = useState(null)
    const {tragosStr} = useParams()
        
    useEffect(()=>{
        getDrink(`/search.php?s=${tragosStr}`).then((data)=>{     
            console.log(tragosStr)    
            console.log(data.drinks)            
            setDrinks(data.drinks)
        })
    }, [tragosStr])

    if(!drink){
        return (
            "Algo raro pasa..."
        )
    }

    return(
        <div className="detail">
            <img src={drink.map((drinks)=>drinks.strDrinkThumb)} alt={drink.map((drinks)=>drinks.strDrink)} />  
            <div className="drinkDetail">            
                <div className="drink">                    
                    <p>{drink.map((drinks)=>drinks.strCategory)}</p>
                    <p className="drinkName">{drink.map((drinks)=>drinks.strDrink)}</p>
                    <p>Ingrediente principal: {drink.map((drinks)=>drinks.strIngredient1)}</p>
                    <p>Ingrediente secundario: {drink.map((drinks)=>drinks.strIngredient2)}</p>
                    <p>{drink.map((drinks)=>drinks.strAlcoholic)}</p></div>
            </div>
        </div>
    )
}