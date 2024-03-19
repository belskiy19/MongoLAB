const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        decription: {
            type: String,
            required: true,
        },
        dateCreated: Date,
        video_id:{
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('Comments', commentsSchema)