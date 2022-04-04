const express = require('express')
const PageController = require('./controllers/PageController')
const AnnualIntController = require('./controllers/AnnualIntController')

const router = express.Router()

// Controllers
const pageController = new PageController()
const annualIntController = new AnnualIntController()

// Routes
router.get('/',annualIntController.renderAnnualInt)
router.post('/', annualIntController.renderAnnualIntBank)

router.get('*', pageController.renderNotFound)

module.exports = router