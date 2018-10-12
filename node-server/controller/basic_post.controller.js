// INTERFACE FOR CREATING HTTP REQUESTS AND RESPONSES AND HANDLING HTTP REQUESTS FROM
// THE WEB APPLICATION

var BasicPostService = require('../services/basic_post.service');

// ================================ CRUD ==================================

exports.ReadBasicPosts = async function(req, res, next) {
    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.limit : 10;

    try {
        var retrievedBasicPosts = await BasicPostService.ReadBasicPost({}, page, limit)
        return res.status(200).json({status: 200, data: retrievedBasicPosts, message: "Successfully Retrieved Posts"});
    } catch ( error ) {
        return res.status(400).json({status: 400, message: error.message});
    }
}

exports.CreateBasicPosts = async function(req, res, next) {
    var newBasicPost = {
        postDescription: req.body.postDescription
    }

    try {
        var createdBasicPost = await BasicPostService.CreateBasicPost( newBasicPost );
        return res.status(200).json({status: 200, data: createdBasicPost, message: "Successfully Retrieved Posts"});
    } catch ( error ) {
        return res.status(400).json({status: 400, message: error.message});
    }
}