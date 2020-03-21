const express = require('express');
const app = express();
const port = 3000;
const pug = require('pug');
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index', {
        message: 'Click on the cat', 
        catName: 'Frank',
        age: 'Age: 6', 
        weight: 'Weight: 5'})
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
