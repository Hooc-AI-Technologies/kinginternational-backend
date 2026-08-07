const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const path = require("path");

// Initialize S3 client using environment variables
const s3Client = new S3Client({
  region: process.env.AWS_REGION || "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const uploadImageToS3 = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image file provided" });
    }

    const bucketName = process.env.AWS_BUCKET_NAME || "hoocai";
    const region = process.env.AWS_REGION || "ap-south-1";

    // Sanitize filename and create unique timestamp key
    const fileExt = path.extname(req.file.originalname).toLowerCase() || ".png";
    const cleanBasename = path.basename(req.file.originalname, fileExt).replace(/[^a-zA-Z0-9_-]/g, "_");
    const s3Key = `uploads/${Date.now()}_${cleanBasename}${fileExt}`;

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: s3Key,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    });

    await s3Client.send(command);

    // Construct public S3 image URL
    const s3Url = `https://${bucketName}.s3.${region}.amazonaws.com/${s3Key}`;

    return res.status(200).json({
      success: true,
      message: "Image uploaded to AWS S3 successfully",
      url: s3Url,
      key: s3Key,
    });
  } catch (error) {
    console.error("[UploadController] Error uploading file to S3:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to upload image to AWS S3: " + error.message,
    });
  }
};

module.exports = {
  uploadImageToS3,
};
