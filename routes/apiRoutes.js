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
console.log(possNames);

// const allBreedList = 'https://dog.ceo/api/breeds/list/all';

var jsonfile = require('jsonfile')
var file = '../reader&writer.json'
var obj = { vills: supervillains.all  }

jsonfile.writeFileSync(file, obj, {spaces: 2, EOL: '\n'})

// writeFile(reader&writer, {possNames, allBreedList}, );



// var data0 = {numberId: "1", companyId : "531"};

// var json = JSON2.stringify(data0); 

// $.ajax({
//  type: "POST",
//  url: "http://localhost:3010/admin?#",
//  data: json,
//  dataType: "json",
//  success: function(msg) {
//  alert('In Ajax');
//  }
// });

// $(function (){
    
//     var $dogName = $('#dog_name');
//     var $imgUrl = $('#img_url');
//     var $send = $('#sendName&Url');

//     $.ajax({
//         type: 'POST',
//         url: '/../admin.html',
//         data: json,
//         dataType: "json",

//         success: function(data) {
//             console.log(petNames.random());
//             $($send).click($dogName=petNames.random());
//             console.log('sucess', data);
//         }
//     });
// });