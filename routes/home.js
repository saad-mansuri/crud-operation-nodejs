const express = require('express')
const {handleHome} = require('../controllers/home')
const homeRoute = express.Router()

homeRoute.get('/', handleHome)

module.exports = {homeRoute} 