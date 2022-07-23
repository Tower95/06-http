
const joke = 'https://api.chucknorris.io/jokes/random'

// fetch(joke).then( (rest) =>
//     rest.json()
//       .then(({id,value})=>{
//         console.log(value);
//         console.log(id);
//       }) 
// ) 

fetch(joke)
  .then(rest => rest.json())
  .then( ({id,value}) => {
    console.log(id,value)
  });

