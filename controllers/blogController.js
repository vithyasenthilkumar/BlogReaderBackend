const blogsModel = require('../models/blogsModel')
const blogInitialData = require('../data/blogInitialData')


const getAllBlogs = async(request, response) => {
    try{
    const blogs = await blogsModel.find()
    if (blogs.length === 0)
    {
       const blogs = await blogsModel.insertMany(blogInitialData)
    }
    response.status(200).json(blogs)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

const addNewBlog = async(request, response) => {
    const newBlog = request.body
    try{
        const existingBlog = await blogsModel.findOne({blogID:request.body.blogID})
        if (existingBlog)
        {
            return response.status(409).json({message:'Blog ID already exsists.'})
        }
        const blog = await blogsModel.create(newBlog)
        response.status(201).json(blog)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

const updateBlog = async(request, response) => {
    const blogToBeUpdated = request.body
    try{
        const blog = await blogsModel.findOneAndUpdate({blogID:blogToBeUpdated.blogID}, blogToBeUpdated)
        response.status(201).json(blog)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = {getAllBlogs, addNewBlog, updateBlog}