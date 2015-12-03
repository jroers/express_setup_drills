var express = require('express');
var app = express();

var foodStuffs = [ {
				dish: "Tiramisu",
				origin: "Italy"
			}, {
				dish: "Fish and Chips",
				origin: "United Kingdom"
			}, {
				dish: "Bœuf Bourguignon",
				origin: "France"
			}, {
				dish: "Paella",
				origin: "Spain"
			}];

var countries = [ {
				country: "USA",
				capital: "Washington DC",
				population: 322000000
			}, {
				country: "France",
				capital: "Paris",
				population: 67000000
			}, {
				country: "China",
				capital: "Beijing",
				population: 1376000000
			}, {
				country: "Russia",
				capital: "Moscow",
				population: 143000000
			}];

app.get('/', function (req, res) {
	res.send('Dearest Rebecca Black. Hey girl.');
});

app.get('/api/dishes', function (req, res) {
	res.json(foodStuffs);
});

app.get('/api/countries', function (req, res) {
	res.json(countries);
});

var server = app.listen(3000);