'use strict'
// import { init } from './js/usuarios-page'
// import { getUsers } from "./js/http-provider"
// comment 
import * as CRUD from './js/crud-provider'

// CRUD.getUsers(2).then(console.log)
// CRUD.createUser({
//   name: 'ismael',
//   job: 'Programer'
// }).then(console.log)

// CRUD.updateUser(1, { name: 'Karen', job:'Media Manager'}).then(console.log)

CRUD.deleteUser(2).then(console.log)
