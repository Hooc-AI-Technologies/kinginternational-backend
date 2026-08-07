const { getValuesData, saveValuesData } = require("../models/valuesModel");

const fetchValuesContent = (req, res) => {
  try {
    const data = getValuesData();
    return res.status(200).json(data);
  } catch (error) {
    console.error("[ValuesController] Failed to fetch values:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateValuesContent = (req, res) => {
  try {
    const updatedData = req.body;
    if (!updatedData || typeof updatedData !== "object") {
      return res.status(400).json({ success: false, message: "Invalid payload" });
    }
    const saved = saveValuesData(updatedData);
    return res.status(200).json({
      success: true,
      message: "Values section content updated successfully",
      data: saved,
    });
  } catch (error) {
    console.error("[ValuesController] Failed to update values:", error);
    return res.status(500).json({ success: false, message: "Failed to update values data" });
  }
};

module.exports = {
  fetchValuesContent,
  updateValuesContent,
};
