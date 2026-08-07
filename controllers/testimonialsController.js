const {
  getTestimonialsData,
  saveTestimonialsData,
} = require("../models/testimonialsModel");

const fetchTestimonialsContent = (req, res) => {
  try {
    const data = getTestimonialsData();
    return res.status(200).json(data);
  } catch (error) {
    console.error("[TestimonialsController] Failed to fetch testimonials:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateTestimonialsContent = (req, res) => {
  try {
    const updatedData = req.body;
    if (!updatedData || typeof updatedData !== "object") {
      return res.status(400).json({ success: false, message: "Invalid payload" });
    }
    const saved = saveTestimonialsData(updatedData);
    return res.status(200).json({
      success: true,
      message: "Testimonials section content updated successfully",
      data: saved,
    });
  } catch (error) {
    console.error("[TestimonialsController] Failed to update testimonials:", error);
    return res.status(500).json({ success: false, message: "Failed to update data" });
  }
};

module.exports = {
  fetchTestimonialsContent,
  updateTestimonialsContent,
};
