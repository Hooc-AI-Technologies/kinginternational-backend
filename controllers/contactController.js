const { getContactData, saveContactData } = require("../models/contactModel");

const fetchContactContent = (req, res) => {
  try {
    const data = getContactData();
    return res.status(200).json(data);
  } catch (error) {
    console.error("[ContactController] Failed to fetch contact content:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateContactContent = (req, res) => {
  try {
    const updatedData = req.body;
    if (!updatedData || typeof updatedData !== "object") {
      return res.status(400).json({ success: false, message: "Invalid payload" });
    }
    const saved = saveContactData(updatedData);
    return res.status(200).json({
      success: true,
      message: "Contact section content updated successfully",
      data: saved,
    });
  } catch (error) {
    console.error("[ContactController] Failed to update contact content:", error);
    return res.status(500).json({ success: false, message: "Failed to update data" });
  }
};

module.exports = {
  fetchContactContent,
  updateContactContent,
};
