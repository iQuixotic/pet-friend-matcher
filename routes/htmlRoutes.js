
var path = require("path");

var bodyParser = require("body-parser");

var ke = require('./apiRoutes')


module.exports = function(app) {

  
  app.get("/admin", function(req, res) {  
    res.sendFile(path.join(__dirname, "/../admin.html"));
  });

  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "/../index.html"));
  });

  app.get("/photos", function(req, res) {
    res.sendFile(path.join(__dirname, "/../photos.html"));
  });

  app.get("/questionaire", function(req, res) {
    res.sendFile(path.join(__dirname, "/../questionaire.html"));
  });


let dognames = ke.possNames;
console.log(ke.possNames);

  
  app.get("/api/dog/names", function(req, res) {
    return res.json(dognames);
  });
  

  app.post("/api/dogname", function(req, res) {
    
    var newdog = req.body;
    dognames.push(newdog);
res.json(newdog);
  });

   
  


}