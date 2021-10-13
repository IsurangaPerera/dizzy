const mongoose = require('mongoose');

const FeebackSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, 'Please select a category'],
      enum: ['results', 'search_box', 'settings', 'other'],
    },
    comments: {
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

module.exports = mongoose.model('Feedback', FeebackSchema);
