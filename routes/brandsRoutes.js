const express = require("express");
const router = express.Router();
const { fetchBrandsContent, updateBrandsContent } = require("../controllers/brandsController");

router.get("/", fetchBrandsContent);
router.put("/", updateBrandsContent);

module.exports = router;
