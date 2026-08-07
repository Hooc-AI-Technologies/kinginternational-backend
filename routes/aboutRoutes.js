const express = require("express");
const router = express.Router();
const { fetchAboutContent, updateAboutContent } = require("../controllers/aboutController");

router.get("/", fetchAboutContent);
router.put("/", updateAboutContent);

module.exports = router;
