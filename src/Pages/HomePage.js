import React from "react";

// import components //

import Battlefield from "../components/Battlefield";
import Jumbotron from "../components/Jumbotron";
import PokeButtons from "../components/PokeButtons";
import Instructions from "../components/Instructions";




const HomePage = ({pokemon, pokeMove}) => {

    
    
    return(
    <>
        <Jumbotron />
        <Instructions />
        <PokeButtons pokemon={pokemon} pokeMove={pokeMove}/>
        <Battlefield pokemon={pokemon} pokeMove={pokeMove}/>
     </>
    );
};

export default HomePage;