const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // res.json({ msg: "working" })
    const locals = {
        title: "Nodejs Blog || Home",
        description: "Simple Blog created with Nodejs, Express & MongoDB."
    }
    res.render('index', { locals })
})

router.get('/about', (req, res) => {
    const locals = {
        title: "Nodejs Blog || About",
        description: "Simple Blog created with Nodejs, Express & MongoDB."
    }
    // res.json({ msg: "working" })
    res.render('about', { locals })
})

module.exports = router