const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema(
  {
    id: { type: String, index: true },
    userId: { type: String, index: true },
    actionType: { type: String, index: true },
    metadata: { type: Object },
    createdAt: { type: Date, index: true, default: Date.now }
  },
  { versionKey: false }
);

module.exports = mongoose.model('ActivityLog', activitySchema);
