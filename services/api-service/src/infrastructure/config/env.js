require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  KAFKA_BROKERS: process.env.KAFKA_BROKERS || 'localhost:9092',
  NODE_ENV: process.env.NODE_ENV || 'development'
};
