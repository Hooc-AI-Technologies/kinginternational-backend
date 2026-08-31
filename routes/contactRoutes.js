const express = require("express");
const router = express.Router();
const {
  fetchContactContent,
  updateContactContent,
  submitContactMessage,
  getContactMessages,
  deleteContactMessage,
} = require("../controllers/contactController");

router.get("/", fetchContactContent);
router.put("/", updateContactContent);
router.post("/submit", submitContactMessage);
router.get("/messages", getContactMessages);
router.delete("/messages/:id", deleteContactMessage);

module.exports = router;
