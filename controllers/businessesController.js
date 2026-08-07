const { getBusinessesData, saveBusinessesData } = require("../models/businessesModel");

const fetchBusinessesContent = (req, res) => {
  try {
    const data = getBusinessesData();
    return res.status(200).json(data);
  } catch (error) {
    console.error("[BusinessesController] Failed to fetch businesses:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateBusinessesContent = (req, res) => {
  try {
    const updatedData = req.body;
    if (!updatedData || typeof updatedData !== "object") {
      return res.status(400).json({ success: false, message: "Invalid payload" });
    }
    const saved = saveBusinessesData(updatedData);
    return res.status(200).json({
      success: true,
      message: "Businesses section content updated successfully",
      data: saved,
    });
  } catch (error) {
    console.error("[BusinessesController] Failed to update businesses:", error);
    return res.status(500).json({ success: false, message: "Failed to update businesses data" });
  }
};

module.exports = {
  fetchBusinessesContent,
  updateBusinessesContent,
};
