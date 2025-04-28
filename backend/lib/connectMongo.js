
import mongoose from 'mongoose';

export const connectMongo = async () => {
  if (mongoose.connections[0].readyState) {
    return; 
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw new Error('MongoDB connection failed');
  }
};
