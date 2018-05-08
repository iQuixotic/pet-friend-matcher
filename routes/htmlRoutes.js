
var path = require("path");

var bodyParser = require("body-parser");

var ke = require('./apiRoutes')

var fs = require('fs')


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

  // app.post("/questionaire", function(req, res) {
  //   res.sendFile(path.join(__dirname, "/admin/shelter"));
  // });

  let dataDog = [];

  app.post("/admin/shelter", function(req, res) {  
   
    let bod = req.body;
   
   
    dataDog.push(bod);
    res.json(bod);
    

  
      console.log("The file was saved!");
  }); 
 
  app.get("/admin/shelter", function(req, res) {
    return res.json(dataDog);
  });

let dognames = ke.possNames;

  
  app.get("/api/dog/names", function(req, res) {
    return res.json(dognames);
  });
  

  app.post("/api/dogname", function(req, res) {
    
    var newdog = req.body;
    dognames.push(newdog);
    res.json(newdog);
  });


   
  


}