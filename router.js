// node router.js
const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3010;
var mysql = require('mysql');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./assets"));



// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// require('mysql')


//     const connection = this.mysql.createConnection({
//         host: "localhost",
//         port: 3306,
//         user: "root",
//         password: "root",
//         database: "dogs_DB"
//     });
//     // connect to the mysql server and sql database
//     connection.connect(function (err) {
//         if (err) throw err;
//     });

// function connQuer() {
//     connection.query(
//         "INSERT INTO dog SET ?",
//         {
//             dog_name: $('#dog_name'),
//             breed: $('#dog_reed'),
//             img_url: $('#img_url'),
//             active: $('#act_lvl'),
//             train: $('#behave'),
//             indep: $('#indep'),
//             descr: $('#descr')
//         },
//         function (err) {
//             if (err) throw err;
//             console.log('hey there beautiful !!');
//         }
//     );
// }

app.listen(PORT, () => {
  console.log('App listening on port' + PORT);
})


