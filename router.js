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
require('./routes/apiRoutes')

app.listen(PORT, () => {
  console.log('App listening on port' + PORT);
})


