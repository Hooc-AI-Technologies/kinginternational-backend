const express = require("express");
const router = express.Router();
const { fetchHeroContent, updateHeroContent } = require("../controllers/heroController");

router.get("/", fetchHeroContent);
router.put("/", updateHeroContent);

module.exports = router;
