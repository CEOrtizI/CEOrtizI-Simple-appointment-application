const express = require('express')
const route=express.Router()
const bodyParser = require('body-parser')


route.use(bodyParser.json())

route.put('/', function(req, res) {
    res.send("MODIFICAR CITA")
    
})

route.get('/',function(req, res) {
    res.send("MOSTRAR CITAS")
    
})

route.delete('/', function(req, res) {
    res.send("Eliminar CITA")
})

route.get('/add',function(req, res) {

    res.send("MOSTRAR FORMULARIO")
    
})
route.post('/add', function(req, res) {
    res.send("ENVIAR DATOS")
})
module.exports = route;