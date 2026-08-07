const { getStatsData, saveStatsData } = require("../models/statsModel");

const fetchStatsContent = (req, res) => {
  try {
    const data = getStatsData();
    return res.status(200).json(data);
  } catch (error) {
    console.error("[StatsController] Failed to fetch stats:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateStatsContent = (req, res) => {
  try {
    const updatedData = req.body;
    if (!updatedData || typeof updatedData !== "object") {
      return res.status(400).json({ success: false, message: "Invalid payload" });
    }
    const saved = saveStatsData(updatedData);
    return res.status(200).json({
      success: true,
      message: "Stats content updated successfully",
      data: saved,
    });
  } catch (error) {
    console.error("[StatsController] Failed to update stats:", error);
    return res.status(500).json({ success: false, message: "Failed to update stats data" });
  }
};

module.exports = {
  fetchStatsContent,
  updateStatsContent,
};
