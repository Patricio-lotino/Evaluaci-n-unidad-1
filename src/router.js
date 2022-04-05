const express = require('express')
const PageController = require('./controllers/PageController')
const AnnualInterestController = require('./controllers/AnnualInterestController')

const router = express.Router()

// Controllers
const pageController = new PageController()
const annualInterestController = new AnnualInterestController()

// Routes
router.get('/', annualInterestController.renderAnnualInterest)
router.post('/', annualInterestController.renderAnnualInterestBank)

router.get('*', pageController.renderNotFound)

module.exports = router
