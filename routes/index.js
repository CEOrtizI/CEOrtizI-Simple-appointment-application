const express = require('express')
const session= require('express-session')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(session({
    secret:'123456789',
    resave:true,
    saveUninitialized:true
}))

router.use(bodyParser.json())

router.get('/',(req,res)=>{
    if(req.session.loggedin){
        
        res.render('index',{title:"Página Principal",logged:true})
    }

    else{
        res.render('index',{title:"Página Principal",logged:false})
    }
   
})
router.get('/logout', function(req, res){

    req.session.destroy(()=>{
        res.redirect('/')
    })

})


module.exports = router