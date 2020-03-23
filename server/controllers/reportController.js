const { Report,Country,User } = require('../models')


class ReportController {
    static getAllReport (req, res, next){

        Report.findAll({
            include: [{
                model:Country,
                as: "Country",
                where: {
                id : req.userData.id
            }
            }]
        })
        .then((data) =>{
            res.status(201).json(data.cases,data.Countries)
        })
        .catch(err => {
            console.log(err)
        })
     } 

     static addReport(req,res,next){
         Report.findOne({
             include: [{
                 model:Country,
                 as: "Country"
             }]
         })
     }
}

module.exports = ReportController