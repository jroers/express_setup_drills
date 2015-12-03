var express = require ('express');
var app = express();

app.use(express.static('public'));

var cats = [ {
			name: "Twitch",
			coat: "Unknown variety"
		}, {
			name: "Tiger",
			coat: "Orange Tabby"
		}, {
			name: "Spyder",
			coat: "Black"
		}, {
			name: "Bao",
			coat: "Tortie Siamese"
		}, {
			name: "Bun",
			coat: "White Siamese"
		}];
var wetFood = [ {
			brand: "9 Lives",
			variety: "Tuna Pate"
		}, {
			brand: "Fancy Feast",
			variety: "Turkey Dinner"
		}, {
			brand: "9 Lives",
			variety: "Beef in gravy"
		} ];

app.get('/', function (req, res) {
	res.send("Oh hi there. Check out the info at /api/cats!");
});

app.get('/api/cats', function (req, res) {
	res.json(cats);
});

app.get('/api/food', function (req, res) {
	res.send(wetFood);
});

var server = app.listen(3000);

