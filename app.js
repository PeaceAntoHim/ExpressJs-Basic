/* Web Server With Express.js */
const express = require('express');
const app = express();
const port = 3000;



/* Berbagai Respon yang dapat diggunakan oleh express */
app.get('/', (req, res) => {
    // res.send('Hello Fucking World!');
        /*    res.json({
                nama: 'Frans',
                email: 'stefanusfranssebastian@gmail.com',
                noHp: '085217095294'
            });
            */

        res.sendFile('./index.html', {root: __dirname });
    });
           
app.get('/about', (req, res) => {
    // res.send('This is a about page!');
    res.sendFile('./about.html', {root: __dirname});
});
app.get('/contact', (req, res) => {
    // res.send('This is a contact page!');
    res.sendFile('/contact.html', {root: __dirname});
});

/* app.use('/', (req, res) => {
    res.status(404);
});
res.send('<h1>404</h1>'); */

/* Method Request express.js */

/*  Request apa yang dikirimkan ke express
    Respon apa yang dikembalikan oleh express
*/

app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category: ${req.query.category}`);
}); 




app.listen(port, () => {
    console.log(`Example app listening att https://localhost:${port}`)
});