// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });


  // cms route loads cms.html
  app.get("/service", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/service-type.html"));
  });

  // blog route loads blog.html
  app.get("/dine-in", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/choose-table.html"));
  });

  // authors route loads author-manager.html
  app.get("/to-go", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/menu.html"));
  });

  app.get("/menu", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/menu.html"));
  });

  app.get("/payment", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/payment.html"));
  });
    // blog route loads blog.html
    app.get("/blog", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/blog.html"));
    });

      // cms route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });
};
