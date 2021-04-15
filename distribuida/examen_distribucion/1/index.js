//Fetch API
const fetch = require("node-fetch");
/*
Fetch API (limite 100):
*/

   fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200').then(res => res.json())
                                                       .then(data =>{
                                                             console.log(data.results)
                                                             const nameArr = data.results.map (pokemon => pokemon.name)
                                                             console.log(nameArr) })
                                                        .catch(e => console.error(e))
/*
Async Await (limite 100):
*/
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