const mongoose = require("mongoose");

const FeebackSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "Please select a category"],
    enum: ["results", "search_box", "settings", "other"],
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
});

module.exports = mongoose.model("Feedback", FeebackSchema);
