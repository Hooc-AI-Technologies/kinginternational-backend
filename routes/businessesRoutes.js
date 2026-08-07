const express = require("express");
const router = express.Router();
const { fetchBusinessesContent, updateBusinessesContent } = require("../controllers/businessesController");

router.get("/", fetchBusinessesContent);
router.put("/", updateBusinessesContent);

module.exports = router;
