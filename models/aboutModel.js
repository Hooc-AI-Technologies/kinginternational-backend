const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "data", "about.json");

const DEFAULT_ABOUT_DATA = {
  badgeText: "ABOUT US",
  titleLine1: "Rooted in Portugal,",
  titleHighlight: "Built",
  titleLine2: "for Europe",
  paragraph1:
    "King Internationals is a diversified business group headquartered in Portugal, with operations spanning retail supermarkets, cash & carry, wholesale, agriculture, consumer brands, and international recruitment.",
  paragraph2:
    "We put customers at the heart of everything we do — delivering fresh products daily, building sustainable agricultural partnerships, and connecting talent across borders.",
  tags: ["Customer-First", "Innovation", "Sustainability", "Quality", "Growth"],
  ctaLabel: "LEARN MORE",
  ctaLink: "/about",
  imageUrl: "/assets/about-img.png",
};

const getAboutData = () => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(content);
    }
  } catch (err) {
    console.error("[AboutModel] Error reading data file:", err);
  }
  return DEFAULT_ABOUT_DATA;
};

const saveAboutData = (data) => {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  return data;
};

module.exports = {
  getAboutData,
  saveAboutData,
  DEFAULT_ABOUT_DATA,
};
