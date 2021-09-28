const express = require("express");
const { signin, signout, signup } = require("../controllers/auth");

const router = express.Router();

router.post("/signin", signin);
router.get("/signout", signout);
router.post("/signup", signup);

module.exports = router;
