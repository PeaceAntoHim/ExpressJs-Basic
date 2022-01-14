// res.send('Hello Fucking World!');
    /*    res.json({
            nama: 'Frans',
            email: 'stefanusfranssebastian@gmail.com',
            noHp: '085217095294'
        });
        */


       
              // res.send('This is a about page!');
              /* app.use('/', (req, res) => {
                  res.status(404);
              });
              res.send('<h1>404</h1>'); */
              
              /* Method Request express.js */
              
              /*  Request apa yang dikirimkan ke express
                  Respon apa yang dikembalikan oleh express
              */


       /* Web Server With Express.js */
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// Gunakan ejs 
app.set('view engine', 'ejs');
app.use(expressLayouts);

/* Berbagai Respon yang dapat diggunakan oleh express */
app.get('/', (req, res) => {

        // res.sendFile('./index.html', {root: __dirname });
        const mahasiswa =  [
            {
                nama: 'Frans Sebastian',
                email: 'stefanusfranssebastian@gmail.com'
            },
            {
                nama: 'Kurniawan',
                email: 'kurinawancore@gmail.com',
            },
            {
                nama: 'Agung Lesmana',
                email: 'agunglestay@mail.com',
            },
            
        ];
        res.render('index', { 
            nama: 'Frans Sebastian',
            layout: 'layouts/main-layout',
            title: 'Halaman Home',
            mahasiswa,
        });
    });
           
app.get('/about', (req, res) => {
    // res.sendFile('./about.html', {root: __dirname});
    res.render('about', {
        layout: 'layouts/main-layout', 
        title: 'Halaman About'});
});
app.get('/contact', (req, res) => {
    // res.send('This is a contact page!');
    // res.sendFile('/contact.html', {root: __dirname});
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Halaman Contact'});
});


app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category: ${req.query.category}`);
}); 


app.listen(port, () => {
    console.log(`Example app listening att https://localhost:${port}`)
});

