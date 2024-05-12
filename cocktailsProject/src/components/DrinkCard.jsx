import { Link } from "react-router-dom"

import "../assets/css/DrinkCard.css"


export const DrinkCard = ({drink}) => {
    
    return(
        <li className="drinkCard">
            <Link to = {`/tragos/${drink.idDrink}`} className="drinkCard"> 
            <img className="drinkImg" src={drink.strDrinkThumb} alt={drink.strCategory} />
            <h2>{drink.strCategory} {drink.strDrink}</h2>
            <small className="drinkAlcohol">
                {drink.strAlcoholic}
            </small>
            <p className="drinkGlass">Se sirve en: {drink.strGlass}</p>        
            </Link>
        </li>
    )
}