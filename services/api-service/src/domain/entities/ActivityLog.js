const { v4: uuidv4 } = require("uuid");

class ActivityLog {
  constructor({ userId, actionType, metadata }) {
    if (!userId || !actionType) {
      throw new Error("userId and actionType are required");
    }

    this.id = uuidv4();
    this.userId = userId;
    this.actionType = actionType;
    this.metadata = metadata || {};
    this.createdAt = new Date();
  }
}

module.exports = ActivityLog;
