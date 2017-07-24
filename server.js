//===========================
// REQUIREMENTS
//===========================
var express = require("express");
var app = express();
var logger = require("morgan");
var bodyParser = require("body-parser");
var hbs = require('hbs');
const methodOverride = require('method-override');

var port = process.env.PORT || 3000;



//===========================
// MIDDLEWARE
//===========================
//this is for morgan
app.use(logger("dev"));
//these are for bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//set handlebars as view engine
app.set("view engine", "hbs");
app.set('views', './views');

app.use(express.static(__dirname + '/public')); // VERY IMPORTANT!! Make sure to add a '/'

app.use(methodOverride('_method'));


//===========================
// CONTROLLERS
//===========================

//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);


app.get('/', (req, res) => {
	res.send('This is our homepage');
});

//===========================
// LISTENERS
//===========================
app.listen(port, function(req, res){
	console.log("listening");
});
