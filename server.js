// node router.js
const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");

// Tells node that we are creating an "express" server
const app = express();

// // Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3010;

// // Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./assets"));

// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, () => {
  console.log('App listening on port' + PORT);
})
