const express = require('express')

const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.get('/',(req,res)=>{
    res.render('index',{title:"Página Principal"})
})

module.exports = router