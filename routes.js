var express = require("express");

var router = express.Router();


router.get("/", function(req,res) {
    console.log("Basic View");
    res.render("index");
});

module.exports = router;