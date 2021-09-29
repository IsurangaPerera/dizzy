const express = require("express");
const Tag = require("../models/Tag");
const { protect } = require("../middleware/auth");
const mongoResults = require("../middleware/mongoResults");
const { addTag, getTags } = require("../controllers/tags");

const router = express.Router();

router.use(protect);
router.route("/").get(mongoResults(Tag), getTags);
router.route("/").post(addTag);

module.exports = router;
