const jwt = require('jsonwebtoken');

const user={
    id:"20",
    name:"Joao",
    username:"joao@gamil.com",
    password:"123456"
}

const secret = "asdnaslkdnja"

const token = jwt.sign({id:user.id,username:user.username},secret,{expiresIn:30});

console.log(token);

function verify(token){
    try{
        const validData = jwt.verify(token,secret);
        console.log(validData);
    }catch(error){
        console.log(error.message);
    }
   
}

const tokenVerify ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlcm5hbWUiOiJqb2FvQGdhbWlsLmNvbSIsImlhdCI6MTY5NDIxMjk0MSwiZXhwIjoxNjk0MjEyOTcxfQ.jJ-xEo2d0Ks5G1Lg5aw7legUH9VkS-T1VqLPaj2pMOo";
verify(tokenVerify);