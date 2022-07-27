'use strict'

const jokeURL = 'https://api.chucknorris.io/jokes/random'
const urlUsuarios = 'https://reqres.in/api/users?page=2';

const cloudPreset = '';
const cloudUrl = '';

const getJoke = async () => {

  try {

    const rest = await fetch(jokeURL);

    if (!rest.ok) throw `Can't did request`;

    const { icon_url, id, value } = await rest.json();
    return {icon_url, id, value };

  } catch (err) {

    throw err;
  }

}

const getUsers = async () => {
  
  const resp = await fetch(urlUsuarios);
  const {data:users} = await resp.json();

  return users;
}

const uploadImage = async( fileToUpload ) =>{
  const formData = new FormData();
  formData.append('upload_preset', cloudPreset);
  formData.append('file', fileToUpload);
  try {
    const resp = await fetch( cloudUrl, {
      method: 'POST',
      body: formData
    } )
    
    if(resp.ok){
      const cloudResp = await resp.json();
      return cloudPreset.secure_url;
    }else{
      throw await resp.json();
    }

  } catch (error) {
    
  }
}

export {
  getJoke,
  getUsers,
  uploadImage
}
