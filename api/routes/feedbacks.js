const express = require("express");
const Feedback = require("../models/Feedback");
const { protect } = require("../middleware/auth");
const mongoResults = require("../middleware/mongoResults");
const { addFeedback, getFeedbacks } = require("../controllers/feedbacks");

const router = express.Router();

router.route("/").get(protect, mongoResults(Feedback), getFeedbacks);
router.route("/").post(protect, addFeedback);

module.exports = router;
