const express = require('express');


const app = express();
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render('index');
});


app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
