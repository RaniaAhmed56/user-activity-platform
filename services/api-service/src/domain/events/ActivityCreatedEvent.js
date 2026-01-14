class ActivityCreatedEvent {
  constructor(activityLog) {
    this.type = "ActivityCreated";
    this.payload = {
      id: activityLog.id,
      userId: activityLog.userId,
      action: activityLog.action,
      metadata: activityLog.metadata,
      createdAt: activityLog.createdAt
    };
  }
}

module.exports = ActivityCreatedEvent;
