const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');

router.get('/', auth, (req, res)=>{
    if(req.user.admin){
        res.send("Esse dado só pode ser visto pelo admin");
    }else{
        res.status(401).send("Você Não é Admin: Acesso Negado!")
    }
    
})

module.exports = router;