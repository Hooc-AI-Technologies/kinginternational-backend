const express = require("express");
const router = express.Router();
const { fetchFoundersContent, updateFoundersContent } = require("../controllers/foundersController");

router.get("/", fetchFoundersContent);
router.put("/", updateFoundersContent);

module.exports = router;
