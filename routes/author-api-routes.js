var db = require("../models");

module.exports = function(app) {
  app.get("/api/employees", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Employee.findAll({
      include: [db.Post]
    }).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });

  app.get("/api/employees/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Employee.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });

  app.post("/api/employees", function(req, res) {
    db.Employee.create(req.body).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });

  app.delete("/api/employees/:id", function(req, res) {
    db.Employee.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });

  app.get("/api/idnumber/:idNumber", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Employee.findOne({
      where: {
        idNumber: req.params.idNumber
      },
      include: [db.Post]
    }).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });
  
};
