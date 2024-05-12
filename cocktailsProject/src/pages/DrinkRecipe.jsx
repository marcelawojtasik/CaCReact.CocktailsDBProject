import { get } from "../utils/conexionDetailsAPI"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import "../assets/css/DrinkRecipe.css"

export const DrinkRecipe = () => {
    const [recipe, setRecipe] = useState(null)
    const {tragosId} = useParams()
        
    useEffect(()=>{
        get(`${tragosId}`).then((data)=>{   
            console.log(data.drinks)
            setRecipe(data.drinks)
        })    
    }, [tragosId])
    
    if(!recipe){        
        return (
            <p className="loading">"Cargando receta..."</p>
            
        )
}
return(
    <div className="recipe">
        <div className="recipeText">
        <p className="drinkCategory">Tipo de trago: {recipe.map((drinks)=>drinks.strCategory)}</p> 
        <p className="drinkRecipe"> {recipe.map((drinks)=>drinks.strInstructions)}</p>   
        <p className="drinkIngredients">Ingredientes: {recipe.map((drinks)=>drinks.strIngredient1)}, {recipe.map((drinks)=>drinks.strIngredient2)},  {recipe.map((drinks)=>drinks.strIngredient3)} </p>
        </div>
        <Link to = "/CaCReact.CocktailsDBProject" className="drinkRecipeImg">
        <img className="drinkRecipeImg" src={recipe.map((drinks)=>drinks.strDrinkThumb)} alt={recipe.map((drinks)=>drinks.strCategory)} />
        </Link>        
    </div>    
)
}