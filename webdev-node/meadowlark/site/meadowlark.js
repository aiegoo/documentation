// meadowlark.js is  a travel website built using express.
//

const express = require('express')
const expressHandlebars = require('express3-handlebars')  
const app = express()

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
        defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/layouts');

const port = process.env.PORT || 3000

//const getMousePosition = (x, y) => ({ x, y });

//set up handlebars instance for views

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

// static middleware for content like CSS, images, client side JS files.
//
//  custom 404 page
app.use((req, res) => {
        res.type('text/plain')
        res.status(404)
        res.render('404')
})
//custom 500 page
app.use((err, req, res, next) => {
        console.error(err.message)
        res.status(500)
        res.render('500')
})

// routes for homepage and about page.
app.get('/', (req, res) => res.render('home')) /* {
        res.type('text/plain')
        res.send('Meadowlark Travel');
}) */

app.get('/about', (req, res) => res.render('about'))/*  {
        res.type('text/plain')
        res.status(404)
        res.send('404 - Not Found')
}) */

// custom 404 page /// these are middlewares.


// custom 500 page // middlewares.

app.listen(port, () => console.log(
        `Express started on http://localhost:${port}; ` +
        `press Ctrl-C to terminate.`))
