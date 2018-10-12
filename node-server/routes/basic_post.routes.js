// API for handling basic post functionality

var express = require('express')
var router = express.Router()

var BasicPostController = require('../controller/basic_post.controller');

// ========================== CRUD ==========================

// Create
router.get('/basic-post', BasicPostController.ReadBasicPosts);

// Delete
router.post('/basic-post', BasicPostController.CreateBasicPosts);

module.exports = router;