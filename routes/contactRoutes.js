const express = require("express");
const router = express.Router();
const {
  fetchContactContent,
  updateContactContent,
} = require("../controllers/contactController");

router.get("/", fetchContactContent);
router.put("/", updateContactContent);

module.exports = router;
