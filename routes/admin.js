const express = require('express');

const router = express.Router();
           // /admin/add-product=> GET
       router.get('/add-product',(req, res, next) =>{
        //console.log('in the middleware');
         res.send(
          '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');      //  Allows the request to continue to the next milddleware in line
         });
           // /admin/add-product => post
         router.post('/add-product', (req, res, next)=>{
          console.log(req.body);
           res.redirect('/');
          });

        module.exports = router;