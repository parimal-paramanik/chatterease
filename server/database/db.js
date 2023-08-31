import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const Connection = async() => {
    const URL =process.env.mongoURL;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;