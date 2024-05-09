import { get } from "../utils/conexionDetailsAPI"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

//Me falta q tome el ID para que al hacer click en la foto muestre la receta
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
            "Cargando receta..."
        )
}
return(
    <div>
        <p>Tipo de trago: {recipe.map((drinks)=>drinks.strCategory)}</p> 
            {recipe.map((drinks)=>drinks.strInstructions)}
        <p>Ingredientes: {recipe.map((drinks)=>drinks.strIngredient1)}, {recipe.map((drinks)=>drinks.strIngredient2)},  {recipe.map((drinks)=>drinks.strIngredient3)} </p>
        <Link to = "/">
        <img src={recipe.map((drinks)=>drinks.strDrinkThumb)} alt={recipe.map((drinks)=>drinks.strCategory)} />
        </Link>        
    </div>
    
)

}