const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/user.js')

// 登入頁面 login page
router.get('/login', (req, res) => {
  res.render('login')
})
// 檢查登入 
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login'
  })(req, res, next)
})
// 註冊頁面 register page
router.get('/register', (req, res) => {
  res.render('register')
})
// 註冊檢查
router.post('/register', (req, res) => {
  const {name, email, password, password2} = req.body
  User.findOne({ email: email })
    .then(user =>{
      if (user) {
        res.render('register', {
          name,
          emai,
          password,
          password2
        })
      } else {
        const newUser = new User({
          name,
          email,
          password,
          password2
        })
        newUser.save(user => {
          res.redirect('/')
        }).catch(err => console.error(err))
      }
    })
})
// 登出 logout
router.get('/logout', (req, res) => {
  req.logOut()
  res.redirect('/users/login')
})

module.exports = router