const kafka = require("./kafkaClient");

class ActivityConsumer {
  constructor(topic, handler) {
    this.consumer = kafka.consumer({ groupId: "activity-group" });
    this.topic = topic;
    this.handler = handler;
  }

  async start() {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic: this.topic, fromBeginning: true });

    await this.consumer.run({
      eachMessage: async ({ message }) => {
        const event = JSON.parse(message.value.toString());
        await this.handler(event);
      }
    });
  }
}

module.exports = ActivityConsumer;
