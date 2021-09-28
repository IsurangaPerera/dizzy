const express = require("express");
const alertRouter = require("./alerts");
const feedbackRouter = require("./feedbacks");
const tagRouter = require("./tags");
const { protect } = require("../middleware/auth");
const reRoute = require("../middleware/reRoute");
const { getMe, updateMe, deleteMe } = require("../controllers/me");

const router = express.Router();

router.use("/alerts", reRoute(alertRouter, { noMongoResults: true }));
router.use("/feedbacks", reRoute(feedbackRouter, { noMongoResults: true }));
router.use("/tags", reRoute(tagRouter, { noMongoResults: true }));

router.use(protect);
router.route("/").get(getMe);
router.route("/").put(updateMe);
router.route("/").delete(deleteMe);

module.exports = router;
