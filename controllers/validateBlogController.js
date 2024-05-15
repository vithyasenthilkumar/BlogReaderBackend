const blogsModel = require('../models/blogsModel')

const getBlogID = async(request, response) => {
    const {blogID} = request.body
    try{
        const blogToBeEdited = await blogsModel.findOne({blogID:blogID})
        response.status(200).json(blogToBeEdited)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = {getBlogID}