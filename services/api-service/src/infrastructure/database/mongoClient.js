const mongoose = require('mongoose');

const connectMongo = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://mongo:27017/activitydb';
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected to API Service');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

module.exports = connectMongo;
