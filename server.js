

var express = require('express');
var http = require('http');
var app = express();
app.set('port', process.env.PORT || 1337);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

app.get('/restaurants', function(request, response) {
    var restaurants = {
    "restaurants":[
        {"name":"Al-Sham Sweets & Pastries", "address": "24-39 Steinway Street, Astoria, NY", "location":{"lat":"40.762170", "lng":"-73.987972"} , "avgRating":"5.0", "numOfReviews":"3"},
        {"name":"El Souk", "address": "25-85 Steinway Street, Astoria, NY","location":{"lat":"40.726275", "lng":"-73.990118"}, "avgRating":"5.0", "numOfReviews":"1"},
        {"name":"One Stop Pizza & Restaurant", "address": "28-15 36th Avenue, Astoria, NY","location":{"lat":"40.793888", "lng":"-73.941023"}, "avgRating":"5.0", "numOfReviews":"2"},
        {"name":"kauduh Kungfunoodle", "address": "42-79 Main Street, Queens, NY","location":{"lat":"40.806883", "lng":"-73.953426"}, "avgRating":"10", "numOfReviews":"45"},
        {"name":"Tora Bora", "address": "79-13 Parsons Blvd, Fresh Meadows, NY","location":{"lat":"40.790314", "lng":"-73.959992"}, "avgRating":"4", "numOfReviews":"15"},
        {"name":"Nanking", "address": "134-07 Rockaway Blvd, South Ozone Park, NY","location":{"lat":"40.650845", "lng":"-73.941453"}, "avgRating":"-1000", "numOfReviews":"1"},
        {"name":"Taci's", "address": "102-07 Metropolitan Avenue, Forest Hills, NY","location":{"lat":"40.741429", "lng":"-73.877938"}, "avgRating":"3", "numOfReviews":"5"},
        {"name":"Xhale Hookah Lounge", "address": "70-11 Austin Street, Forest Hills, NY","location":{"lat":"40.748712", "lng":"-73.900597"}, "avgRating":"5", "numOfReviews":"7"},
        {"name":"IndoChi Fusion Cuisine", "address": "70-74 Kissena Blvd, Flushing, NY","location":{"lat":"40.855785", "lng":"-73.904374"}, "avgRating":"4", "numOfReviews":"15"},
        {"name":"Aria Kabab", "address": "72-55 Kissena Blvd, Flushing, NY","location":{"lat":"40.600815", "lng":"-74.111054"}, "avgRating":"4.5", "numOfReviews":"8"}
    ]};
    response.send(200, restaurants);
});

app.get('/easteregg', function(request, response) {
    var message = 'https://www.youtube.com/watch?v=JgP55yvkNbE';
    response.send(200, message);
});