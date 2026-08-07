const express = require("express");
const router = express.Router();
const { fetchStatsContent, updateStatsContent } = require("../controllers/statsController");

router.get("/", fetchStatsContent);
router.put("/", updateStatsContent);

module.exports = router;
