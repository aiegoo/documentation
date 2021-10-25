// meadowlark.js is  a travel website built using express.
//

const express = require('express');
  
const app = express();

const port = process.env.PORT || 3000

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
        res.send('404 - not found')
})
//custom 500 page
app.use((err, req, res, next) => {
        console.error(err.message)
        res.type('text/plain')
        res.send('500 - Server Error')
})

// routes for homepage and about page.


// custom 404 page /// these are middlewares.


// custom 500 page // middlewares.

app.listen(port, () => console.log(
        `Express started on http://localhost:${port}; ` +
        `press Ctrl-C to terminate.`))
