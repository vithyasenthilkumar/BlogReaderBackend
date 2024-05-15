const express = require('express')
const router = express.Router()
const {getBlogID} = require('../controllers/validateBlogController')

router.route('/').post(getBlogID)

module.exports = router