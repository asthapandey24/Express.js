

const express = require('express');

const hello = express();

hello.use((req, res, next) =>{
 console.log('in the middleware');
 next();//  Allows the request to continue to the next milddleware in line
 res.send('<h1>Hello ! </h1>');
});

hello.use((req, res, next) =>{
  console.log('in another middleware');
})

hello.listen(3000);