const mongoose = require('mongoose');

const StatisticSchema = new mongoose.Schema(
  {
    data: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['batched', 'realtime'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Statistic', StatisticSchema);
