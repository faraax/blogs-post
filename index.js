const express = require('express')
const app = express()
const PORT = 5000 || process.env.PORT
const expressLayout = require('express-ejs-layouts')
require('dotenv').config()

app.use(express.static('public'))

// Templete Engine 
app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.use('/', require('./server/routes/main'))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/ `);
})