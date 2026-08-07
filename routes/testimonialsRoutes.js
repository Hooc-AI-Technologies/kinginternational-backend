const express = require("express");
const router = express.Router();
const {
  fetchTestimonialsContent,
  updateTestimonialsContent,
} = require("../controllers/testimonialsController");

router.get("/", fetchTestimonialsContent);
router.put("/", updateTestimonialsContent);

module.exports = router;
