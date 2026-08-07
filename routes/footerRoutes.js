const express = require("express");
const router = express.Router();
const {
  fetchFooterContent,
  updateFooterContent,
} = require("../controllers/footerController");

router.get("/", fetchFooterContent);
router.put("/", updateFooterContent);

module.exports = router;
