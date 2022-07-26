'use strict'
import { getUsers } from "./http-provider";

const body  = document.body;
let tbody;
let count = 1;
const createHtml = () => {
    
    const html = `
    <h1 class="mt-5"> Users</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Name</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

    tbody = document.querySelector('tbody');
}

const createRowUser = ( {id, email, first_name, last_name, avatar} ) => {


    const html = `
        <td scope="col"> ${count} </td>
        <td scope="col"> ${email} </td>
        <td scope="col"> ${first_name } ${last_name }</td>
        <td scope="col">
            <img class="img-thumbnail" src="${avatar}">
        </td>
    `;
    count++;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tbody.appendChild(tr);
}


export const init = async() => {

    createHtml();

    ( await getUsers()).forEach(createRowUser);

}

