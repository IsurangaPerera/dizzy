const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema(
  {
    safety: {
      type: String,
      required: [true, 'Please select a saftey class'],
      enum: ['benign', 'malicious'],
    },
    category: {
      type: String,
      required: [true, 'Please select a category'],
      enum: [
        'crypto-service',
        'index',
        'marketplace',
        'pornography',
        'forum',
        'other',
      ],
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
    page: {
      type: String,
      required: [true, 'Please provide a page id'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Tag', TagSchema);
