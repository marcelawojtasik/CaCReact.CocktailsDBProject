import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { DrinkDetails } from "./pages/DrinkDetails"
import { DrinkRecipe } from "./pages/DrinkRecipe"
import './App.css'

export const App = () => {
  return (
    <>
    <BrowserRouter>
    <header>
      <Link to = "/CaCReact.CocktailsDBProject">
      <h1 className="title">Taaaragos</h1>
      </Link>
    </header>

    <Routes>
      <Route path = "/CaCReact.CocktailsDBProject" element = {<LandingPage/>} /> 
      <Route path = "/tragos/:tragosId" element = { <DrinkDetails/> } />  
      <Route path = "/receta/:tragosId" element = { <DrinkRecipe/> } /> 
    </Routes>

    </BrowserRouter>
    </>
  )
}
