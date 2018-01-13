
//import 'babel-polyfill'
//var Symbol = require('es6-symbol/polyfill');
//import $ from 'jquery'
//import metismenu from 'metismenu'
import 'src/scripts/lib/init'
import './assets/dynamic/style/bootstrap/_bootstrap.scss'
import './assets/dynamic/style/inspinia/style.scss'
import 'font-awesome/scss/font-awesome.scss'
import 'animate.css/animate.css'
import './assets/dynamic/style/toastr/toastr.scss'
import './assets/dynamic/style/app.scss'


let app=null
if (process.env.NODE_ENV === 'production') {
  app = require('./app.prod')
} else {
  //module.exports = require('./app.dev')
  app = require('./app.dev')
}

export default app

