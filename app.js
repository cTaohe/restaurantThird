// include express form node_nodules
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const Restaurant = require('./models/restaurant.js')
const passport = require('passport')
const session = require('express-session')
const flash = require('connect-flash')

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// setting mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useCreateIndex: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongoose error')
})
db.once('open', () => {
  console.log('mongoose connected')
})

// use passport-session
app.use(session({
  secret: 'resraurant',
  resave: 'false',
  saveUninitialized: 'false'
}))

// initialize passpoart
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport.js')(passport)
app.use((req, res, next) => {
  res.locals.user = req.user
  res.locals.isAuthenticated = req.isAuthenticated
  next()
})

// setting handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// use connect flash
app.use(flash())
app.use((req, res, next) => {
  res.locals.user = req.user
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})

// setting static page
app.use(express.static('public'))

// use method override
app.use(methodOverride('_method'))

// body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// 載入路由器
app.use('/', require('./routes/home.js'))
app.use('/restaurants', require('./routes/restaurants.js'))
app.use('/users', require('./routes/user.js'))
app.use('/auth', require('./routes/auth.js'))

// start and listen the server
app.listen(port, () => {
  console.log(`The express is on http://localhost:${port}`)
})