const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant.js')
const { authenticated } = require('../config/auth.js')

// 首頁
router.get('/', authenticated, (req, res) => {
  Restaurant.find({ userId: req.user._id },(err, restaurants) => {
    if (err) return console.error(err)
    return res.render('index', {restaurants: restaurants})
  })
})

module.exports = router