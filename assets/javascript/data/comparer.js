
//  validate: function(value) {
//     if (isNaN(value) === false) {
//       return true;
//       // readAnreadAndCheck(answers.howMany);
//     }


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bama_DB"
  });
  // connect to the mysql server and sql database
  connection.connect(function(err) {
    if (err) throw err;
    // back to main menu
    menuQ();
  });
  


  