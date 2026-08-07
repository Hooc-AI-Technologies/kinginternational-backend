const { getBrandsData, saveBrandsData } = require("../models/brandsModel");

const fetchBrandsContent = (req, res) => {
  try {
    const data = getBrandsData();
    return res.status(200).json(data);
  } catch (error) {
    console.error("[BrandsController] Failed to fetch brands:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateBrandsContent = (req, res) => {
  try {
    const updatedData = req.body;
    if (!updatedData || typeof updatedData !== "object") {
      return res.status(400).json({ success: false, message: "Invalid payload" });
    }
    const saved = saveBrandsData(updatedData);
    return res.status(200).json({
      success: true,
      message: "Brands section content updated successfully",
      data: saved,
    });
  } catch (error) {
    console.error("[BrandsController] Failed to update brands:", error);
    return res.status(500).json({ success: false, message: "Failed to update brands data" });
  }
};

module.exports = {
  fetchBrandsContent,
  updateBrandsContent,
};
