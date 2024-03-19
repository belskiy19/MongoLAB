const mongoose = require('mongoose');
const videos = require('./models/History_diseases');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://Videos:ukf3JUZFbo@cluster0.whugc105.mongodb.net/videos?retryWrites=true&w=majority&appName=Cluster0');


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function testDB() {
        for (let i = 0; i < 1000; i++) {
            const videos = await videos.create(
                {
                    name: 'Video' + i, dateCreated: Date.now()
                }
            );

            const insert = await videos.find();
            console.log(insert);

            await sleep(10);
        }
    }
    
    testDB();
}