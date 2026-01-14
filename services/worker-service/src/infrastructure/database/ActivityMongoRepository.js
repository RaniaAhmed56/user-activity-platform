const ActivityLogRepository = require("../../domain/repositories/ActivityLogRepository");
const ActivityModel = require("./activityModel");

class ActivityMongoRepository extends ActivityLogRepository {
  async save(activityLog) {
    await ActivityModel.create(activityLog);
  }
}

module.exports = ActivityMongoRepository;
