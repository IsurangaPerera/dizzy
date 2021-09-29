const webResults = require('../middleware/webResults');
const express = require('express');
const { protect } = require('../middleware/auth');
const { web } = require('../controllers/search');

const router = express.Router();

router.use(protect);
router.get('/web', webResults, web);

module.exports = router;
