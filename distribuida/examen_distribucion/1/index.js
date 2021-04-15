//Fetch API
const fetch = require("node-fetch");


   const pokemonName = async() =>
    {
       try {
         const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
         const data = await res.json()
         console.log(data.results)
           } 
       catch(e) {
         console.error(e)
                } 
    }
//Llamada de funcion
pokemonName()