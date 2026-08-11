const { getBusinessDetailData, saveBusinessDetailData } = require("../models/businessDetailModel");

const fetchBusinessDetail = (req, res) => {
  try {
    const { slug } = req.params;
    const data = getBusinessDetailData(slug);
    if (!data) {
      return res.status(404).json({ success: false, message: `Business ${slug} not found` });
    }
    return res.status(200).json(data);
  } catch (error) {
    console.error("[BusinessDetailController] Failed to fetch business detail:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateBusinessDetail = (req, res) => {
  try {
    const { slug } = req.params;
    const updatedData = req.body;
    if (!updatedData || typeof updatedData !== "object") {
      return res.status(400).json({ success: false, message: "Invalid payload" });
    }
    const saved = saveBusinessDetailData(slug, updatedData);
    return res.status(200).json({
      success: true,
      message: `Business detail for ${slug} updated successfully`,
      data: saved,
    });
  } catch (error) {
    console.error("[BusinessDetailController] Failed to update business detail:", error);
    return res.status(500).json({ success: false, message: "Failed to update business detail" });
  }
};

module.exports = {
  fetchBusinessDetail,
  updateBusinessDetail,
};
