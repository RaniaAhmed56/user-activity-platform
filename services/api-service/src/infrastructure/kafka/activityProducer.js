const kafka = require('./kafkaClient');

let producer;

const initProducer = async () => {
  producer = kafka.producer();
  await producer.connect();
  return producer;
};

const sendActivityEvent = async (activity) => {
  if (!producer) {
    await initProducer();
  }

  await producer.send({
    topic: 'user-activities',
    messages: [
      {
        key: activity.userId,
        value: JSON.stringify(activity)
      }
    ]
  });
};

const disconnectProducer = async () => {
  if (producer) {
    await producer.disconnect();
  }
};

module.exports = {
  initProducer,
  sendActivityEvent,
  disconnectProducer
};
