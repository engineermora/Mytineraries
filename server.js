const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const city = require('./city');

const app = express();
const port = process.env.PORT || 5000;


mongoose.connect('mongodb+srv://engineermora:Cartagena*2018@cluster0-mw5j4.mongodb.net/mytinerary?retryWrites=true&w=majority', { useNewUrlParser: true })
.then(function (){console.log('Esta vaina andaaaaa')})
.catch(function (error){console.log('Error,',error)})
.then( res=> {


    console.log("conectado")
    city.find()
    .then(res=> console.log(res))
      });
   

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/test', (req, res) => {
    res.send({ express: 'El testeo esta funcionando' });
});

app.get('/api/cities', (req, res) => {

    console.log("conectado")
    
    city.find()
    .then(resp=> 
    res.send(resp)
    );
   
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));