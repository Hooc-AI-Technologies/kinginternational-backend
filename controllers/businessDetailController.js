const {
  getBusinessDetailBySlug,
  saveBusinessDetailBySlug,
} = require("../models/businessDetailModel");

const fetchBusinessDetail = (req, res) => {
  try {
    const { slug } = req.params;
    const detailData = getBusinessDetailBySlug(slug);
    if (!detailData) {
      return res.status(404).json({ success: false, message: `Business detail for ${slug} not found` });
    }
    return res.json(detailData);
  } catch (error) {
    console.error("[BusinessDetailController] Failed to fetch:", error);
    return res.status(500).json({ success: false, message: "Failed to fetch business detail data" });
  }
};

const updateBusinessDetail = (req, res) => {
  try {
    const { slug } = req.params;
    const data = req.body;
    if (!data) {
      return res.status(400).json({ success: false, message: "Invalid payload" });
    }
    const updated = saveBusinessDetailBySlug(slug, data);
    return res.json({ success: true, data: updated });
  } catch (error) {
    console.error("[BusinessDetailController] Failed to update:", error);
    return res.status(500).json({ success: false, message: "Failed to update business detail data" });
  }
};

module.exports = {
  fetchBusinessDetail,
  updateBusinessDetail,
};
