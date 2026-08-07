const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "data", "stats.json");

const DEFAULT_STATS_DATA = {
  badgeText: "OUR IMPACT",
  titleLine1: "Numbers That Reflect",
  titleHighlight: "Real Communities",
  items: [
    {
      value: "14,000+",
      label: "Customers",
      subtext: "Served across our network",
    },
    {
      value: "9",
      label: "Locations",
      subtext: "Active stores and sites",
    },
    {
      value: "6",
      label: "Cities",
      subtext: "Present in Portugal",
    },
    {
      value: "Global",
      label: "Expansion",
      subtext: "Romania & Netherlands",
    },
    {
      value: "Daily",
      label: "Fresh Deliveries",
      subtext: "Farm-to-shelf freshness",
    },
  ],
};

const getStatsData = () => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(content);
    }
  } catch (err) {
    console.error("[StatsModel] Error reading data file:", err);
  }
  return DEFAULT_STATS_DATA;
};

const saveStatsData = (data) => {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  return data;
};

module.exports = {
  getStatsData,
  saveStatsData,
  DEFAULT_STATS_DATA,
};
