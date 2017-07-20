//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate
	});
});

//==============================
// CREATE
//==============================

router.post('/', (req, res) => {
    console.log(req.body);

    const newPirate = {
        name: req.body.name,
        birthplace: req.body.birthplace,
		yearOfDeath: req.body.yearOfDeath,
		base: req.body.base,
		nickname: req.body.nickname
    };

    pirates.push(newPirate);

    res.redirect("/pirates");
});

//==============================
// UPDATE
//==============================

//==============================
// DESTROY
//==============================

//==============================
// EXPORTS
//==============================

module.exports = router;
