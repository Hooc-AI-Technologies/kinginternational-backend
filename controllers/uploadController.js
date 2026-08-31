const fs = require("fs");
const path = require("path");

let s3Client = null;
if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
  try {
    const { S3Client } = require("@aws-sdk/client-s3");
    s3Client = new S3Client({
      region: process.env.AWS_REGION || "ap-south-1",
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
  } catch (err) {
    console.warn("[UploadController] AWS SDK initialization skipped:", err.message);
  }
}

const uploadImageToS3 = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image file provided" });
    }

    const fileExt = path.extname(req.file.originalname).toLowerCase() || ".png";
    const cleanBasename = path.basename(req.file.originalname, fileExt).replace(/[^a-zA-Z0-9_-]/g, "_");
    const filename = `${Date.now()}_${cleanBasename}${fileExt}`;

    // If S3 is configured, upload to S3
    if (s3Client && process.env.AWS_BUCKET_NAME) {
      try {
        const { PutObjectCommand } = require("@aws-sdk/client-s3");
        const bucketName = process.env.AWS_BUCKET_NAME;
        const region = process.env.AWS_REGION || "ap-south-1";
        const s3Key = `uploads/${filename}`;

        const command = new PutObjectCommand({
          Bucket: bucketName,
          Key: s3Key,
          Body: req.file.buffer,
          ContentType: req.file.mimetype,
        });

        await s3Client.send(command);
        const s3Url = `https://${bucketName}.s3.${region}.amazonaws.com/${s3Key}`;

        return res.status(200).json({
          success: true,
          message: "Image uploaded to AWS S3 successfully",
          url: s3Url,
          key: s3Key,
        });
      } catch (s3Err) {
        console.warn("[UploadController] S3 upload failed, falling back to local storage:", s3Err.message);
      }
    }

    // Local fallback: save to public/uploads directory
    const uploadsDir = path.join(__dirname, "..", "public", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, filename);
    fs.writeFileSync(filePath, req.file.buffer);

    const serverUrl = (process.env.BACKEND_URL || "https://kinginternational.hoocaitechnologies.com").replace(/\/+$/, "");
    const localUrl = `${serverUrl}/uploads/${filename}`;

    return res.status(200).json({
      success: true,
      message: "Image uploaded locally successfully",
      url: localUrl,
      key: filename,
    });
  } catch (error) {
    console.error("[UploadController] Error uploading file:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to upload image: " + error.message,
    });
  }
};

module.exports = {
  uploadImageToS3,
};
