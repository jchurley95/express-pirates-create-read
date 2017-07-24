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
		pirates: pirates.seededPirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});

//==============================
// CREATE
//==============================

/* SAVE PIRATE */
router.post('/', (req, res) => {
  console.log(req.body);

  const newPirate = {
    	name: req.body.name,
        birthplace: req.body.birthplace,
		yearOfDeath: req.body.yearOfDeath,
		base: req.body.base,
		nickname: req.body.nickname
  };
  pirates.seededPirates.push(newPirate);
  res.redirect("/pirates");
});

//==============================
// UPDATE
//==============================

/* UPDATE PIRATE */
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const pirate = pirates.seededPirates[id];
	pirate.name = req.body.name;
	pirate.birthplace = req.body.birthplace;
	pirate.yearOfDeath = req.body.yearOfDeath;
	pirate.base = req.body.base;
	pirate.nickname = req.body.nickname;
  res.method = "GET";
  res.redirect(`/pirates/${id}`);
});



//==============================
// DESTROY
//==============================

/* DELETE PIRATE */
router.delete('/:id', (req, res) => {

    pirates.seededPirates.splice(req.params.id, 1);

    res.method= "GET";
    res.redirect("/pirates");
});

//this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates.seededPirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate
	});
});
//==============================
// EXPORTS
//==============================

module.exports = router;
