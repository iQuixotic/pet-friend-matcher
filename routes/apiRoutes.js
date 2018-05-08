// import { writeFile } from 'fs/promises';

const axios = require('axios');






// $ npm install --save pet-names
const petNames = require('pet-names');


var supervillains = require('supervillains');





// $ npm install --save superheroes
var superheroes = require('superheroes');

// console.log(superheroes.random());
//  console.log(supervillains.all);
 let possNames = {vills: supervillains.all,
    hercs: superheroes.all,
    pets: petNames.all }




    module.exports = {possNames}