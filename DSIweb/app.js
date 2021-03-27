const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express(); /// function

app.set('view engine', 'ejs'); /// adding engine for dynamic templating
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('shop', {pageTitle : 'Online shop'});
});


app.listen(3000);