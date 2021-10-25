import express from 'express';
import pug from 'pug';
import path from 'path';


// console.log(express);
const app = express();

let fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple."
];

let contents = "God is able to do all things. He lives in me";

app.set('port', process.env.port || 3002);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home', { content: contents });
});

app.get('/about', (req, res) => {
    let randomFortune =
        fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', { fortune: randomFortune});
});

// custom 404 page
app.use((req, res, next) =>{
    res.type('text/plain');
    res.status(404);
    res.render('500');
});

// custom 500 page
app.use((err, req, res, next,) =>{
   
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), () => {
    console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate');
});
