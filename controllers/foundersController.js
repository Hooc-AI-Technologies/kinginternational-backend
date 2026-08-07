const { getFoundersData, saveFoundersData } = require("../models/foundersModel");

const fetchFoundersContent = (req, res) => {
  try {
    const data = getFoundersData();
    return res.status(200).json(data);
  } catch (error) {
    console.error("[FoundersController] Failed to fetch founders:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateFoundersContent = (req, res) => {
  try {
    const updatedData = req.body;
    if (!updatedData || typeof updatedData !== "object") {
      return res.status(400).json({ success: false, message: "Invalid payload" });
    }
    const saved = saveFoundersData(updatedData);
    return res.status(200).json({
      success: true,
      message: "Founders section content updated successfully",
      data: saved,
    });
  } catch (error) {
    console.error("[FoundersController] Failed to update founders:", error);
    return res.status(500).json({ success: false, message: "Failed to update founders data" });
  }
};

module.exports = {
  fetchFoundersContent,
  updateFoundersContent,
};
