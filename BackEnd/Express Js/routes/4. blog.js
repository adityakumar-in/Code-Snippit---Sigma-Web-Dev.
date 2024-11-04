const express = require('express')
const router = express.Router()

// Router-Level Middleware
router.use((req, res, next) => {
    console.log("I am blog middleware - Runs with 4. Router.js")
    next()
})

// Define homePage route
router.get('/', (req, res) => {
    res.send('Blog home page')
})
router.get('/about', (req, res) => {
    res.send('Blog about page')
})
router.get('/blogpost/:slug', (req, res) => {
    res.send(`Blog ${req.params.slug} page`)
})

module.exports = router