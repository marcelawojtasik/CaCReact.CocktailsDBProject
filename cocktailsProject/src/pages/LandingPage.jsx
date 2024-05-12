import {DrinksGrid} from "../components/DrinksGrid"
import {DrinksGrid2} from "../components/DrinksGrid2"
import {RandomDrink} from "../components/RandomDrink"
import {getRandom} from "../utils/conexionRandom"

export const LandingPage = () => {
    return(
        <>
        <DrinksGrid />
        <DrinksGrid2 />        
        <RandomDrink />        
        </>
    )   
}