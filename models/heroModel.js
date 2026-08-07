const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "data", "hero.json");

const DEFAULT_HERO_DATA = {
  badgeText: "PORTUGAL · EUROPE · WORLD",
  titleLine1: "Growing",
  titleLine2: "Communities",
  titleLine3: "Through",
  titleHighlight: "Innovation,",
  titleLine4: "Retail & Agriculture",
  description:
    "A diversified European business group delivering trusted retail, agriculture, wholesale, recruitment, and consumer brands with a commitment to quality, sustainability, and long-term partnerships.",
  primaryCtaLabel: "Explore Our Businesses",
  primaryCtaLink: "/businesses",
  secondaryCtaLabel: "Our Story",
  secondaryCtaLink: "/about",
  logoUrl: "/assets/logo.png",
  heroBgUrl: "/assets/hero-img.png",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Businesses", href: "/businesses" },
    { label: "Founders", href: "/founders" },
    { label: "Contact", href: "/contact" },
  ],
};

const getHeroData = () => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(content);
    }
  } catch (err) {
    console.error("[HeroModel] Error reading data file:", err);
  }
  return DEFAULT_HERO_DATA;
};

const saveHeroData = (data) => {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  return data;
};

module.exports = {
  getHeroData,
  saveHeroData,
  DEFAULT_HERO_DATA,
};
