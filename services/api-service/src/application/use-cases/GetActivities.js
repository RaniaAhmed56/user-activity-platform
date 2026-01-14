const ActivityModel = require('../../infrastructure/database/activityModel');

class GetActivities {
  async execute(filters = {}, pagination = {}) {
    const { userId, actionType, startDate, endDate } = filters;
    const { page = 1, limit = 10 } = pagination;

    const query = {};

    if (userId) query.userId = userId;
    if (actionType) query.actionType = actionType;
    
    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) query.createdAt.$gte = new Date(startDate);
      if (endDate) query.createdAt.$lte = new Date(endDate);
    }

    const skip = (page - 1) * limit;
    const activities = await ActivityModel.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await ActivityModel.countDocuments(query);

    return {
      data: activities,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    };
  }
}

module.exports = GetActivities;
