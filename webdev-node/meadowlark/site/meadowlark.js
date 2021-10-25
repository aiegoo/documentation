// meadowlark.js is  a travel website built using express.
//

var express = require('express');
  
var app = express();

//set up handlebars instance for views
var handlebars = require('express3-handlebars')
                .create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

var fortunes = [
        "Conquer your fears or they will conquer you.",
        "Rivers need springs.",
        "Do not fear what you don't know.",
        "You will have a pleasant surprise.",
        "Whenever possible, keep it simple.",
        "Vodaphone is working on their challenges.",
        "Express is cool with dynamic content.",
        "I had use for the hat I got from Indonesia.",
        "Love is a mystery."
]; 

app.set('port', process.env.PORT || 3000);

// static middleware for content like CSS, images, client side JS files.
//
app.use(express.static(__dirname + '/public'));

// routes for homepage and about page.
app.get('/', function(req, res){
        res.render('home');
});


app.get('/about', function(req, res){
        var randomFortune =
                    fortunes[Math.floor(Math.random() * fortunes.length)];
        res.render('about', {fortune: randomFortune});
});


// custom 404 page /// these are middlewares.
app.use(function(req, res){
        res.status(404);
        res.render('404');
});



// custom 500 page // middlewares.
app.use(function(err, req, res, next){
      console.error(err.stack);
      res.status(500);
      res.render('500');
});


app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' +
    app.get('port') + '; press Cltr-C to terminate.');
});
