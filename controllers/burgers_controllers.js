let express = require("express");

let router = express.Router();

// Import the model (burger.js) to use its database functions.
let burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
    // let hbsObject = {
    //    burgers: data
    //  };
    console.log(data);
    res.render("index", { burgers: data });
  });
});


router.put("/api/burgers/:id", function (req, res) {
  // let condition = req.params.id;
  console.log ("it works")
  // console.log("condition", condition);

  // console.log(req.body.devoured);

  // burger.updateOne(condition, function(result) {
  //   if (result.changedRows === 0) {
  //     // If no rows were changed, then the ID must not exist, so 404
  //     return res.status(404).end();
  //   } else {
  //     res.status(200).end();
  //   }
  // });
});

router.post("/api/burgers", function (req, res) {
  burger.create(req.body.burger_name, function(result) {
    // Send back the ID of the new burger
    console.log(result);
    res.redirect("/");
  });
});

router.delete("/api/burgers/:id", function (req, res) {

  let condition = "id = " + req.params.id;

  burger.delete(condition, function (result) {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
