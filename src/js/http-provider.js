'use strict'

const jokeURL = 'https://api.chucknorris.io/jokes/random'
const urlUsuarios = 'https://reqres.in/api/users?page=2';

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

export {
  getJoke,
  getUsers
}
