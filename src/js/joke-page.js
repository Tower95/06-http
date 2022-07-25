'use strict';

import { getJoke } from "./http-provider";

const body = document.body
let btnNewJoke, olList;
const createJokeHTML = () => {

  const html = `
  <h1 class="mt-5">Facts</h1>
  <hr>

  <button class="btn btn-primary">get new Joke</button>
  <ol class="mt-2 list-group">
    
  </ol>
  `
  const divJokes = document.createElement('div')
  divJokes.innerHTML = html;

  body.append(divJokes);
}

const events = () => {

  olList = document.querySelector('ol');
  btnNewJoke = document.querySelector('button');

  btnNewJoke.addEventListener('click', async () => {
    btnNewJoke.disabled = true;
    addjoke( await getJoke());
    btnNewJoke.disabled = false;
  })
  

}

const addjoke = ({ value, id, icon_url }) => {
 
    let html = ` 
    <li class="list-group-item" id=${id}>
    <p>${value}</p>
    <li>
  `
  let newJoke = document.createElement('div')
  newJoke.innerHTML = html;

  olList.append(newJoke.firstElementChild);

}


export const init = () => {
  createJokeHTML();
  events();
}


