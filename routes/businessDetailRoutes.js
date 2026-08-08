const express = require("express");
const router = express.Router();
const {
  fetchBusinessDetail,
  updateBusinessDetail,
} = require("../controllers/businessDetailController");

router.get("/:slug", fetchBusinessDetail);
router.put("/:slug", updateBusinessDetail);

module.exports = router;
