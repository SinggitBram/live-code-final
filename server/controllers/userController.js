const { User } = require('../models')
const jwt = require ('jsonwebtoken')

class UserController {
    static loginUser (req, res, next){
        let {username, password} = req.body

        User.findOne({where: 
            {username, password}
        })
        .then (user => {
            if(user){
                let token = jwt.sign({ id: user.id , username: user.username}, process.env.JWT_SECRET);
                res.status(200).json({token, id:user.id, username:user.username})
            }else{
                res.status(400).json({
                    status: 400,
                    message: `user not found`
                })
            }
            
        })
        .catch(err => {
            res.status(400).json({
                status : 400,
                message: `wrong username or password`
            })
        })
     }
    
}

module.exports = UserController