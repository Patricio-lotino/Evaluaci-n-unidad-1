/* eslint-disable no-unused-vars */
const express = require('express')
const InterestController = require('./controllers/InterestController')
const PageController = require('./controllers/PageController')

const router = express.Router()

// Controllers
const pageController = new PageController()
const interestController = new InterestController()

// Routes
router.get('/', InterestController.renderInterestForm)
router.post('/', InterestController.renderInterestResult)

router.all('*', pageController.renderNotFound)

module.exports = router
