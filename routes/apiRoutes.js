// import { writeFile } from 'fs/promises';

const axios = require('axios');



// // const admin = require('../assets/javascript/data/addDog.js');


// // admin.app.methods.breedChooser();

// // console.log(holderPasser);

// const breedQuery = 'https://dog.ceo/api/breed/'+ dogCatcher+'/images'

// // let newRan = arr.length;


// // const pug = 'https://dog.ceo/api/breed/pug/images';

// axios.get(pug)

// .then(function (response) {
//     console.log(response.data.message);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });




// $ npm install --save pet-names
const petNames = require('pet-names');

// console.log(petNames.random());
// console.log(petNames.all);


// $ npm install --save supervillains
var supervillains = require('supervillains');

// console.log(supervillains.random());
// console.log(supervillains.all);



// $ npm install --save superheroes
var superheroes = require('superheroes');

// console.log(superheroes.random());
//  console.log(supervillains.all);
 let possNames = {vills: supervillains.all,
    hercs: superheroes.all,
    pets: petNames.all }


// const allBreedList = 'https://dog.ceo/api/breeds/list/all';



// writeFile(reader&writer, {possNames, allBreedList}, );



// var data0 = {numberId: "1", companyId : "531"};

// var json = JSON2.stringify(data0); 

// $.ajax({
//  type: "POST",
//  url: '/api/dog/names',
//  data: json,
//  dataType: "json",
//  success: function(msg) {
//  alert('In Ajax');
//  }
// });

// $(function (){
    
    // var $dogName = $('#dog_name');
    // var $imgUrl = $('#img_url');
    // var $send = $('#sendName&Url');

    module.exports = {possNames}