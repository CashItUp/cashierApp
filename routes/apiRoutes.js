// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/all", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Employee.findAll({}).then(function(dbEmployee) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbEmployee);
    });
  });

   app.get("/api/idnumber/:idNumber", function(req, res) {
    if (req.params.idNumber) {
      db.Employee.findOne({
        where: {
          idNumber: req.params.idNumber
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });
 
};