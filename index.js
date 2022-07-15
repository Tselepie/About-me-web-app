const exp = require('constants');
const { request } = require('express');
const express = require('express');
const req = require('express/lib/request');
const { dirname, join } = require('path');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'my_cv')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.set('html', path.join(__dirname, 'html'));
app.set('view engine', 'ejs');

app.get('/', (rq, rs) => {
    rs.render(path.join(__dirname, '/html/cv.ejs'));
})

app.listen(port, () => {
    console.log('Listening to port ', port);
})
