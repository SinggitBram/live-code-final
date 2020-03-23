const { Country } = require('../models')


class CountryController {
    static getAllCountry (req, res, next){

        Country.findAll()
        .then((data) =>{
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(500).json({
                status: 500,
                message: `Data Not Found`
            })
        })
     } 
     static deleteReport (req,res,next) {
         
     }
}

module.exports = CountryController