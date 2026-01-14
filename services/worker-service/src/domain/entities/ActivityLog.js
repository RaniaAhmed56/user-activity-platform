class ActivityLog {
  constructor({ id, userId, actionType, metadata, createdAt }) {
    this.id = id;
    this.userId = userId;
    this.actionType = actionType;
    this.metadata = metadata || {};
    this.createdAt = createdAt ? new Date(createdAt) : new Date();
  }
}

module.exports = ActivityLog;
