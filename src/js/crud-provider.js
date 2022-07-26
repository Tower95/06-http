'use strict'
const urlCRUD = 'https://reqres.in/api/users';

const getUsers = async (id) => {

  const resp = await fetch(`${ urlCRUD } / ${ id }`);
  const data = await resp.json();

  return data
}