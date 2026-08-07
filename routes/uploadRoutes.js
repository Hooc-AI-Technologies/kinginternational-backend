const express = require("express");
const multer = require("multer");
const router = express.Router();
const { uploadImageToS3 } = require("../controllers/uploadController");

// Use memory storage for multer
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (file && file.mimetype && file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files (JPEG, PNG, WEBP, GIF, SVG) are allowed!"), false);
    }
  },
}).single("image");

// Custom middleware wrapper to handle Multer errors cleanly in JSON format
router.post("/", (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      console.error("[UploadRoute] Multer upload error:", err);
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    return uploadImageToS3(req, res);
  });
});

module.exports = router;
