const router = require('express').Router()
const ReportController = require('../controllers/reportController')

// router.get('/' ,ReportController.getAllReport)
router.post('/' ,ReportController.addReport)
// router.delete('/:id' ,ReportController.deleteReport)


module.exports = router