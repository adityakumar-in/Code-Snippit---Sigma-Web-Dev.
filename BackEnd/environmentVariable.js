import dotenv from 'dotenv';
dotenv.config();

// Accessing the environment variable - MONGDB_URI
const mongodbURL = process.env.MONGODB_URI