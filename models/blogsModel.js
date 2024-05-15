const mongoose = require('mongoose')

const blogsSchema = new mongoose.Schema(
    {
        blogTitle : {
            type:String,
            required:true
        },
        blogID :{
            type:String,
            required:true,
            unique:true,
            index: true
        },
        blogArticle : {
            type:String,
            required:true
        },
        blogAuthor : {
            type:String,
            required:true
        },
        blogCategory: {
            type: String,
            enum: ['Technology','Fitness', 'Fashion','Entertainment'],
            required: true
          }
    },
    {
        collection : 'blogs'
    }
)

module.exports = mongoose.model('blogs', blogsSchema)