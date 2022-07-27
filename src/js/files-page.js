'use strict'

import { uploadImage } from "./http-provider";

const body = document.body;
let inputFile, imgFoto;

const createInputFileHtml = () => {

  const html = `
    <h1 class="mt-5">Upload File </h1> 
    <hr>

    <label>Select a picture to upload</label>
    
    <input type="file" accept="image/png, image.jpg"/>
    
    <br>
    <img id="foto" class="img-thumbnail" src="">

  `
  let divInputFile = document.createElement('div');

  divInputFile.innerHTML = html

  body.append(divInputFile);

  inputFile = document.querySelector('input');
  imgFoto = document.querySelector('#foto');

}

const events = () => {

  inputFile.addEventListener('change', (event)=>{
    const file = event.target.files[0];
    // console.log(file);
    uploadImage(file).then(url => {
      imgFoto.src = url;
    })
  })


}


export const init = () => {
  createInputFileHtml();
  events();
}