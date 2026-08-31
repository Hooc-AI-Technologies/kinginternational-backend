const fs = require("fs");
const path = require("path");
const { getContactData, saveContactData } = require("../models/contactModel");

const MESSAGES_FILE = path.join(__dirname, "..", "data", "messages.json");

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

const submitContactMessage = (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Required fields missing (name, email, message)" });
    }

    let messages = [];
    if (fs.existsSync(MESSAGES_FILE)) {
      try {
        const fileContent = fs.readFileSync(MESSAGES_FILE, "utf-8");
        messages = JSON.parse(fileContent);
      } catch (err) {
        console.error("Error reading messages.json, resetting file:", err);
      }
    }

    const newMessage = {
      id: Date.now().toString(),
      name,
      email,
      subject: subject || "No Subject",
      message,
      submittedAt: new Date().toISOString(),
    };

    messages.push(newMessage);

    // Ensure dir exists
    const dir = path.dirname(MESSAGES_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf-8");

    return res.status(200).json({
      success: true,
      message: "Message submitted successfully",
      data: newMessage,
    });
  } catch (error) {
    console.error("[ContactController] Failed to submit contact message:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getContactMessages = (req, res) => {
  try {
    let messages = [];
    if (fs.existsSync(MESSAGES_FILE)) {
      try {
        const fileContent = fs.readFileSync(MESSAGES_FILE, "utf-8");
        messages = JSON.parse(fileContent);
      } catch (err) {
        console.error("Error reading messages.json:", err);
      }
    }
    // Return descending by submission date
    messages.sort((a, b) => new Date(b.submittedAt || 0) - new Date(a.submittedAt || 0));
    return res.status(200).json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    console.error("[ContactController] Failed to retrieve messages:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteContactMessage = (req, res) => {
  try {
    const { id } = req.params;
    if (!fs.existsSync(MESSAGES_FILE)) {
      return res.status(404).json({ success: false, message: "No messages store found" });
    }
    let messages = JSON.parse(fs.readFileSync(MESSAGES_FILE, "utf-8"));
    const initialLen = messages.length;
    messages = messages.filter((m) => m.id !== id);
    if (messages.length === initialLen) {
      return res.status(404).json({ success: false, message: "Message not found" });
    }
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf-8");
    return res.status(200).json({ success: true, message: "Message deleted successfully" });
  } catch (error) {
    console.error("[ContactController] Failed to delete message:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  fetchContactContent,
  updateContactContent,
  submitContactMessage,
  getContactMessages,
  deleteContactMessage,
};
