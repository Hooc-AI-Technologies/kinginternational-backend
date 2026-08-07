const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "data", "founders.json");

const DEFAULT_FOUNDERS_DATA = {
  titleLine1: "The People Who",
  titleHighlight: "Lead the Vision",
  founders: [
    {
      id: "marcelo-araujo",
      role: "FOUNDER & CEO",
      name: "Marcelo Araújo",
      bio: "Marcelo founded King Internationals with a vision to bring quality, affordable retail to Portuguese communities. Under his leadership, the group has grown to 9 locations across 6 cities and is now expanding internationally.",
      imageUrl: "/assets/founder-1.png",
    },
    {
      id: "romy-king",
      role: "CO-FOUNDER & DIRECTOR",
      name: "Romy King",
      bio: "Romy brings international business expertise and a deep commitment to people-first operations. She oversees brand development, international recruitment, and the consumer brands portfolio.",
      imageUrl: "/assets/founder-2.png",
    },
  ],
};

const getFoundersData = () => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(content);
    }
  } catch (err) {
    console.error("[FoundersModel] Error reading data file:", err);
  }
  return DEFAULT_FOUNDERS_DATA;
};

const saveFoundersData = (data) => {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  return data;
};

module.exports = {
  getFoundersData,
  saveFoundersData,
  DEFAULT_FOUNDERS_DATA,
};
