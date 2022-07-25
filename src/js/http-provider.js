'use strict'

const jokeURL = 'https://api.chucknorris.io/jokes/random'

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

export {
  getJoke
}
