'use strict'

const jokeURL = 'https://api.chucknorris.io/jokes/random'

const getJoke = async () => {

  try {

    const rest = await fetch(jokeURL);

    if (!rest.ok) throw `Can't did request`;

    const { url_icon, id, value } = await rest.json();

    return { url_icon, id, value };

  } catch (err) {

    throw err;
  }

}

export {
  getJoke
}
