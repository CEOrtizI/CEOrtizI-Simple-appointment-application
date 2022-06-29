const express= require('express')
const session= require('express-session')
const route=express.Router()
const bodyParser= require('body-parser')
const Patient= require('../models/patient')
route.use(bodyParser.urlencoded({ extended: true }));

route.use(session({
    secret:'123456789',
    resave:true,
    saveUninitialized:true
}))
route.use(bodyParser.json())
route.get('/', function(req, res) {
    res.render('login',{title: 'Login',})
})

route.post('/',  async (req, res) =>{

    const{username,password}=req.body

    const result= await Patient.findOne({"username":username,"password":password}).count()
    try{
        if(result>0){
            req.session.usuario=username
            req.session.loggedin=true
            res.redirect('http://localhost:8080')
        }
        else{
            res.send("login incorrecto")
        }
    }
    catch(err){
        res.status(500).json({"result":false,"error":err.toString()})
    }
    
    //res.send("enviar datos login")
})

route.post('/add', function(req, res) {

    try{
        const patient=new Patient(req.body)

        patient.save()
        
        res.status(200).json({"result":true,"data":patient})
    
    }
    catch(err){
        res.status(500).json({"result":false,"error":err.toString()})
    }
    //res.send("enviar datos login")
})
module.exports =route;