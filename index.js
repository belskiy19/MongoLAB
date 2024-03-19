const mongoose = require('mongoose');
const comments = require('./models/Comments');
const videos = require('./models/History_diseases');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://Videos:ukf3JUZFbo@cluster0.whugc105.mongodb.net/videos?retryWrites=true&w=majority&appName=Cluster0');

    const video = await videos.create({
        name: 'Video 1', dateCreated: Date.now()
    });

    const com1 = await comments.create({
        name: 'Den1', description: 'Desc1', dateCreated: Date.now(), video_id: video._id
    });

    const com2 = await comments.create({
        name: 'Den2', description: 'Desc1', dateCreated: Date.now(), video_id: video._id
    });

    const com3 = await comments.create({
        name: 'Den3', description: 'Desc1', dateCreated: Date.now(), video_id: video._id
    });

    await comments.deleteOne({ name: 'Den2' });

    await comments.findOneAndReplace({ _id: com3._id }, {
        name: 'Den3', description: 'Desc3', dateCreated: Date.now(), video_id: video._id
    });

    const found = await comments.find({ name: 'Den1' });
    console.log(found);
}