const { start } = require('./interfaces/server');
const { initProducer, disconnectProducer } = require('./infrastructure/kafka/activityProducer');
const connectMongo = require('./infrastructure/database/mongoClient');

const main = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await connectMongo();

    console.log('Initializing Kafka producer...');
    await initProducer();
    console.log('Kafka producer initialized successfully');

    console.log('Starting API server...');
    await start();

    // Graceful shutdown
    process.on('SIGTERM', async () => {
      console.log('SIGTERM signal received: closing HTTP server');
      await disconnectProducer();
      process.exit(0);
    });

    process.on('SIGINT', async () => {
      console.log('SIGINT signal received: closing HTTP server');
      await disconnectProducer();
      process.exit(0);
    });
  } catch (error) {
    console.error('Application startup error:', error);
    process.exit(1);
  }
};

main();
