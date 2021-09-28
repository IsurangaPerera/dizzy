const express = require("express");
const Alert = require("../models/Alert");
const { protect, authorize } = require("../middleware/auth");
const mongoResults = require("../middleware/mongoResults");
const { addAlert, deleteAlert, getAlerts } = require("../controllers/alerts");

const router = express.Router();

router.use(protect);
router.route("/").get(mongoResults(Alert), getAlerts);
router.route("/").post(addAlert);

router.route("/:id").delete(authorize(Alert), deleteAlert);

module.exports = router;
