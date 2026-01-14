const ActivityLog = require("../../domain/entities/ActivityLog");

class ProcessActivityLog {
  constructor(activityRepository) {
    this.activityRepository = activityRepository;
  }

  async execute(event) {
    // Event could be a raw activity object or wrapped in a type
    const data = event.payload || event;
    
    // Skip if no userId or actionType
    if (!data.userId || !data.actionType) {
      console.warn('Skipping invalid event:', data);
      return;
    }

    try {
      const activityLog = new ActivityLog({
        id: data.id,
        userId: data.userId,
        actionType: data.actionType,
        metadata: data.metadata || {},
        createdAt: data.createdAt
      });
      
      await this.activityRepository.save(activityLog);
      console.log('Activity saved to MongoDB:', activityLog.id, 'Action:', activityLog.actionType);
    } catch (error) {
      console.error('Error processing activity:', error);
    }
  }
}

module.exports = ProcessActivityLog;

module.exports = ProcessActivityLog;
