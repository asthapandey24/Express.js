

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/', (req, res, next)=>{
 // console.log('This always runs');
  next();
})

app.use('/add-product',(req, res, next) =>{
 //console.log('in the middleware');
      res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')      //  Allows the request to continue to the next milddleware in line
});
app.post('/product', (req, res, next)=>{
  console.log(req.body);
  res.redirect('/');
});

app.use('/',(req, res, next) =>{
  //console.log('in another middleware');
  res.send('<h1>Hello</h1>');

})

app.listen(3000);