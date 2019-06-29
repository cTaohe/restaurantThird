const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/user.js')

// 登入頁面 login page
router.get('/login', (req, res) => {
  res.render('login')
})
// 檢查登入 
router.post('/login', (req, res) => {
  res.send('檢查登入!')
})
// 註冊頁面 register page
router.get('/register', (req, res) => {
  res.render('register')
})
// 註冊檢查
router.post('/register', (req, res) => {
  res.send('register!')
})
// 登出 logout
router.get('/logout', (req, res) => {
  res.send('logout')
})

module.exports = router