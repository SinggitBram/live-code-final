const router = require('express').Router()
const ReportController = require('../controllers/reportController')
const authenticateUser = require("../middlewares/authentication")

router.get('/' ,authenticateUser,ReportController.getAllReport)
router.post('/' ,ReportController.addReport)
router.delete('/:id' ,ReportController.deleteReport)


module.exports = router