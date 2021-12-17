const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');

const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

 app.use(cors());
 app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
 res.header("Access-Control-Allow-Headers",
 "Origin, X-Requested-With, Content-Type, Accept");
 next();
 });

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const mongoose = require('mongoose');

const strConnection = 'mongodb+srv://admin:admin@cluster0.eb5dg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(strConnection);
}

const jerseySchema = new mongoose.Schema({
    Name:String,
    Team:String,
    Number:String,
    Image:String
});

const jerseyModel = mongoose.model('5345345345', jerseySchema);


app.get('/', (req, res) => {
    res.send('This is the server')
})

app.post('/api/jerseys', (req,res)=>{
    console.log(req.body);
    console.log(req.body.Name);
    console.log(req.body.Team);
    console.log(req.body.Number);
    console.log(req.body.image);

    jerseyModel.create({
        Name:req.body.Name,
        Team:req.body.Team,
        Number:req.body.Number,
        Image:req.body.Image
    })
    .then()
    .catch();
    res.send('Data Sent to Server!')
})

app.get('/api/jerseys/:id',(req, res)=>{
    console.log(req.params.id);

    jerseyModel.findById(req.params.id,(error,data)=>{
        res.json(data);
    })
})

app.delete('/api/jerseys/:id', (req, res)=>{
    console.log('Deleteing : '+req.params.id);

    jerseyModel.deleteOne({_id:req.params.id},
        (error, data)=>{
            if(error)
                res.status(500).send(error)
            res.status(200).send(data);
        })
})

app.put('/api/jerseys/:id',(req, res)=>{
    console.log('update');
    console.log(req.body);
    console.log("Updating: " + req.params.id);

    jerseyModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })

})



app.get('/api/jerseys', (req, res) => {
    jerseyModel.find((err, data)=>{
        res.json(data);
    })
      
})

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})