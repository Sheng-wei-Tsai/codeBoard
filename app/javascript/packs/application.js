// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// tailwind.config.js
import "stylesheets/application"
<<<<<<< HEAD
<<<<<<< HEAD
import "stylesheets/editor"
=======
import "channels/editor"
=======
import "pages/editor"
>>>>>>> 修正commit紀錄

>>>>>>> ACE JS檔改CDN連結/修正view 部分code縮排

// jquery
import 'jquery'
import $ from 'jquery'
window.$ = window.jquery = $
import 'popper.js'

//bootstrap
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

// font-awesome
import 'font-awesome/css/font-awesome.min.css'