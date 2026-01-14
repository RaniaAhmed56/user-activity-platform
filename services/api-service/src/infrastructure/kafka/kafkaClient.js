const { Kafka } = require("kafkajs");
const env = require("../config/env");

const kafka = new Kafka({
  clientId: 'api-service',
  brokers: env.KAFKA_BROKERS.split(',')
});

module.exports = kafka;
