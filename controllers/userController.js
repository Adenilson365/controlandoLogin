const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userController ={
    register: async function(req, res){
        const selectedUser = await User.findOne({email:req.body.email});
        if(selectedUser) return res.status(400).send("Usuário já existe");

        const user = new User({
            name:req.body.name,
            email:req.body.email,
            password: bcrypt.hashSync(req.body.password)
        });
        try{
            const savedUser = await user.save();
            res.send(savedUser);
        }catch(error){
            res.status(400).send(error);
        }
        
    },


    login: async function(req, res){
        const userName = req.body.email;
        const userPassword = req.body.password;
        const selectedUser = await User.findOne({email:req.body.email});
        if(selectedUser){
         
            if(bcrypt.compareSync(userPassword,selectedUser.password)){
                const token = jwt.sign({_id:selectedUser._id, admin:selectedUser.admin},process.env.TOKEN_SECRET);
                res.header('autorization-token', token);
                res.send("Usuário Logado");
            }else{
                res.send("Email ou Senha incorretos");
            }
        }else{
            res.status(400).send("Email ou Senha incorretos");
        }
        
        
        


    }
}

module.exports = userController;