const express = require("express");
const router = express.Router();
const { fetchBusinessesContent, updateBusinessesContent } = require("../controllers/businessesController");
const { fetchBusinessDetail, updateBusinessDetail } = require("../controllers/businessDetailController");

router.get("/", fetchBusinessesContent);
router.put("/", updateBusinessesContent);
router.get("/detail/:slug", fetchBusinessDetail);
router.put("/detail/:slug", updateBusinessDetail);

module.exports = router;

