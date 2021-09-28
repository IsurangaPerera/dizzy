const walletInfo = require("../middleware/walletInfo");
const express = require("express");
const { protect } = require("../middleware/auth");
const { wallet } = require("../controllers/wallets");

const router = express.Router();

router.use(protect);
router.get("/wallet", walletInfo, wallet);

module.exports = router;