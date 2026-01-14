class ActivityLogRepository {
  static async create(data) {
    const activity = new ActivityModel(data);
    return activity.save();
  }

  static async find(filter = {}, skip = 0, limit = 10) {
    return ActivityModel.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
  }
}


module.exports = ActivityLogRepository;
