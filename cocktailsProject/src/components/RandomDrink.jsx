import {getRandom} from "../utils/conexionRandom"
import {useState, useEffect} from "react"
import {DrinkCard} from "./DrinkCard"
import '../assets/css/DrinkCard.css'
import '../assets/css/RandomDrink.css' 


export const RandomDrink = ()=>{
    const [random, setRandom] = useState([])   

    useEffect(() => {
        getRandom().then((data) => {
            console.log(data.drinks)
            setRandom(data.drinks)
        })
        }, []) //si seteo random en vacio van apareciendo aleatoriamente los tragos

    return(
        <>
        <div className="random">
        <p className="randomTitle">Sugerencia del Bartender</p>
        <div className="randomDrink">        
        {random.map((drink) => (
        <DrinkCard key = {random.idDrink} drink = {drink} />    
        ))}
        </div>  
        </div>
    
    </>
)    
    

    


}