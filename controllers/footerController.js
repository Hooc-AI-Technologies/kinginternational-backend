const { getFooterData, saveFooterData } = require("../models/footerModel");

const fetchFooterContent = (req, res) => {
  try {
    const data = getFooterData();
    return res.status(200).json(data);
  } catch (error) {
    console.error("[FooterController] Failed to fetch footer content:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateFooterContent = (req, res) => {
  try {
    const updatedData = req.body;
    if (!updatedData || typeof updatedData !== "object") {
      return res.status(400).json({ success: false, message: "Invalid payload" });
    }
    const saved = saveFooterData(updatedData);
    return res.status(200).json({
      success: true,
      message: "Footer section content updated successfully",
      data: saved,
    });
  } catch (error) {
    console.error("[FooterController] Failed to update footer content:", error);
    return res.status(500).json({ success: false, message: "Failed to update data" });
  }
};

module.exports = {
  fetchFooterContent,
  updateFooterContent,
};
