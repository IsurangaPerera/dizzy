const walletResults = require("../middleware/walletResults");
const webResults = require("../middleware/webResults");
const express = require("express");
const { protect } = require("../middleware/auth");
const { wallet, web } = require("../controllers/search");

const router = express.Router();

router.use(protect);
router.get("/web", webResults, web);
router.get("/wallet", walletResults, wallet);

module.exports = router;
