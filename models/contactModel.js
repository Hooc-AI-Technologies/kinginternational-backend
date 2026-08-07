const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "data", "contact.json");

const DEFAULT_CONTACT_DATA = {
  titleLine1: "Building the Future",
  titleHighlight: "Together",
  description:
    "Partner with King Internationals to discover trusted retail, agriculture, wholesale, and business solutions designed for long-term success.",
  ctaLabel: "Contact Us",
  ctaLink: "/contact",
  bgImageUrl: "/assets/contact.png",
};

const getContactData = () => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(content);
    }
  } catch (err) {
    console.error("[ContactModel] Error reading data file:", err);
  }
  return DEFAULT_CONTACT_DATA;
};

const saveContactData = (data) => {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  return data;
};

module.exports = {
  getContactData,
  saveContactData,
  DEFAULT_CONTACT_DATA,
};
