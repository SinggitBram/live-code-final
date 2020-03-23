const jwt =require('jsonwebtoken')
require('dotenv').config()

function authenticateUser(req,res,next){
    const{token} = req.headers
    try{
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userData = decoded
        next()
    }
    catch(err) {
        next(err)
    }
}