const { getAboutData, saveAboutData } = require("../models/aboutModel");

const fetchAboutContent = (req, res) => {
  try {
    const data = getAboutData();
    return res.status(200).json(data);
  } catch (error) {
    console.error("[AboutController] Failed to fetch about content:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateAboutContent = (req, res) => {
  try {
    const updatedData = req.body;
    if (!updatedData || typeof updatedData !== "object") {
      return res.status(400).json({ success: false, message: "Invalid payload" });
    }
    const saved = saveAboutData(updatedData);
    return res.status(200).json({
      success: true,
      message: "About section content updated successfully",
      data: saved,
    });
  } catch (error) {
    console.error("[AboutController] Failed to update about content:", error);
    return res.status(500).json({ success: false, message: "Failed to update about data" });
  }
};

module.exports = {
  fetchAboutContent,
  updateAboutContent,
};
