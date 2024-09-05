import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;

const connectMongoDB = async () => {
  // Connect to MongoDB
  await mongoose.connect(process.env.MONGODB_URI, { // Accessing the environment variable
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error(err);
  });
}

connectMongoDB();

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});