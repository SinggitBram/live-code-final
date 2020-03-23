require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routerUser = require('./routes/userRouter')
const routerCountry = require('./routes/countryRouter')
const routerReport = require('./routes/reportRouter')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/login', routerUser)
app.use('/countries', routerCountry)
app.use('/reports', routerReport)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))