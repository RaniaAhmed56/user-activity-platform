const LogUserActivity = require('../../application/use-cases/LogUserActivity');
const GetActivities = require('../../application/use-cases/GetActivities');

const logUserActivityUseCase = new LogUserActivity();
const getActivitiesUseCase = new GetActivities();

const createActivity = async (req, res) => {
  try {
    const { userId, actionType, metadata } = req.body;

    if (!userId || !actionType) {
      return res.status(400).json({ error: 'userId and actionType are required' });
    }

    const activityLog = await logUserActivityUseCase.execute({
      userId,
      actionType,
      metadata
    });

    res.status(201).json({
      message: 'Activity logged successfully',
      data: activityLog
    });
  } catch (error) {
    console.error('Error creating activity:', error);
    res.status(500).json({ error: 'Failed to log activity' });
  }
};

const getActivities = async (req, res) => {
  try {
    const { userId, actionType, startDate, endDate, page = 1, limit = 10 } = req.query;

    const filters = {};
    if (userId) filters.userId = userId;
    if (actionType) filters.actionType = actionType;
    if (startDate) filters.startDate = startDate;
    if (endDate) filters.endDate = endDate;

    const pagination = {
      page: Math.max(1, parseInt(page)),
      limit: Math.min(100, parseInt(limit))
    };

    const result = await getActivitiesUseCase.execute(filters, pagination);

    res.status(200).json({
      message: 'Activities retrieved successfully',
      ...result
    });
  } catch (error) {
    console.error('Error fetching activities:', error);
    res.status(500).json({ error: 'Failed to fetch activities' });
  }
};

const getActivityById = async (req, res) => {
  try {
    const ActivityModel = require('../../infrastructure/database/activityModel');
    const activity = await ActivityModel.findById(req.params.id);

    if (!activity) {
      return res.status(404).json({ error: 'Activity not found' });
    }

    res.status(200).json({
      message: 'Activity retrieved successfully',
      data: activity
    });
  } catch (error) {
    console.error('Error fetching activity:', error);
    res.status(500).json({ error: 'Failed to fetch activity' });
  }
};

const getHealth = (req, res) => {
  res.status(200).json({ status: 'API Service is healthy' });
};

module.exports = {
  createActivity,
  getActivities,
  getActivityById,
  getHealth
};
