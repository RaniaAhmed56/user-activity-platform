const connectMongo = require("./infrastructure/database/mongoClient");
const ActivityConsumer = require("./infrastructure/kafka/activityConsumer");
const ActivityMongoRepository = require("./infrastructure/database/ActivityMongoRepository");
const ProcessActivityLog = require("./application/use-cases/ProcessActivityLog");

require("dotenv").config();

(async () => {
  await connectMongo();

  const repository = new ActivityMongoRepository();
  const processor = new ProcessActivityLog(repository);

  const consumer = new ActivityConsumer(
    process.env.KAFKA_TOPIC,
    async (event) => {
      await processor.execute(event);
    }
  );

  await consumer.start();
})();
