const express = require('express')
const router = express.Router()
const {getAllBlogs,addNewBlog, updateBlog} = require('../controllers/blogController')

router.route('/').get(getAllBlogs).post(addNewBlog).patch(updateBlog)

module.exports = router