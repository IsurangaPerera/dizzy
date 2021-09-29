const mongoose = require("mongoose");

const TagSchema = new mongoose.Schema({
  safety: {
    type: String,
    required: [true, "Please select a saftey class"],
    enum: ["benign", "suspicious", "malicious"],
  },
  category: {
    type: String,
    required: [true, "Please select a category"],
    enum: [
      "social_network",
      "marketplace",
      "multimedia",
      "wiki",
      "forum",
      "other",
    ],
  },
  comments: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
    select: false,
  },
  page: {
    type: String,
    required: [true, "Please provide a page id"],
  },
});

module.exports = mongoose.model("Tag", TagSchema);
