const express = require("express");
const router = express.Router();
const { fetchValuesContent, updateValuesContent } = require("../controllers/valuesController");

router.get("/", fetchValuesContent);
router.put("/", updateValuesContent);

module.exports = router;
