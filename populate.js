require('dotenv').config();

const mockData = require('./mock-data.json');

const Job = require('./models/Job');
const connectDB = require('./db/connect');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('Connection Succesful');
        await Job.create(mockData);
        console.log('Data succesfully populated in Database');
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start();