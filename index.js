// servidor e rotas
const express = require('express');
const petshop = require('./petshop');
const app = express();

app.use(express.json());

app.listen(3000, () =>{
    console.log('Servidor rodando')
});

//console.log(petshop.listarPets());

app.get('/pets/:nome', (req, res) => {
    const {nome} = req.params
    res.send(petshop.buscarPet(nome))
});

app.post('/addpets',(req, res) => {
    const pet =req.body;
    res.json(pet)
    petshop.adicionarPet(pet)
});