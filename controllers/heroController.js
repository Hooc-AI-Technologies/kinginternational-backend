const { getHeroData, saveHeroData } = require("../models/heroModel");

const fetchHeroContent = (req, res) => {
  try {
    const data = getHeroData();
    return res.status(200).json(data);
  } catch (error) {
    console.error("[HeroController] Failed to fetch hero:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateHeroContent = (req, res) => {
  try {
    const updatedData = req.body;
    if (!updatedData || typeof updatedData !== "object") {
      return res.status(400).json({ success: false, message: "Invalid payload" });
    }
    const saved = saveHeroData(updatedData);
    return res.status(200).json({
      success: true,
      message: "Hero section content updated successfully",
      data: saved,
    });
  } catch (error) {
    console.error("[HeroController] Failed to update hero:", error);
    return res.status(500).json({ success: false, message: "Failed to update hero data" });
  }
};

module.exports = {
  fetchHeroContent,
  updateHeroContent,
};
