const mongoose = require('mongoose');

const videosSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        decription: String,
        dateCreated: Date,
    }
)

module.exports = mongoose.model('Videos', videosSchema)