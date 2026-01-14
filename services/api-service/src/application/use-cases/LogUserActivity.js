const ActivityLog = require("../../domain/entities/ActivityLog");
const ActivityCreatedEvent = require("../../domain/events/ActivityCreatedEvent");
const { sendActivityEvent } = require("../../infrastructure/kafka/activityProducer");

class LogUserActivity {
  async execute(data) {
    const activityLog = new ActivityLog(data);
    const event = new ActivityCreatedEvent(activityLog);

    // Send to Kafka
    await sendActivityEvent({
      id: activityLog.id,
      userId: activityLog.userId,
      actionType: activityLog.actionType,
      metadata: activityLog.metadata,
      createdAt: activityLog.createdAt
    });

    return {
      id: activityLog.id,
      userId: activityLog.userId,
      actionType: activityLog.actionType,
      metadata: activityLog.metadata,
      createdAt: activityLog.createdAt
    };
  }
}

module.exports = LogUserActivity;
