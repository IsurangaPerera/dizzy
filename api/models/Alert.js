const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema(
  {
    query: {
      type: String,
      unique: true,
      required: [true, 'Please select a query'],
    },
    frequency: {
      type: String,
      required: [true, 'Please select a frequency'],
      enum: ['daily', 'weekly', 'monthly'],
    },
    notes: {
      type: String,
      default: '',
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Alert', AlertSchema);
