const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "data", "values.json");

const DEFAULT_VALUES_DATA = {
  titleLine1: "The Values Behind",
  titleHighlight: "Everything",
  titleLine2: "We Do",
  cards: [
    {
      id: "locations",
      iconName: "map-pin",
      title: "Multiple Locations",
      description:
        "9 locations across 6 Portuguese cities, bringing quality products and services close to every customer.",
    },
    {
      id: "deliveries",
      iconName: "truck",
      title: "Fresh Daily Deliveries",
      description:
        "Farm-fresh produce and essential goods delivered daily across our store network and wholesale channels.",
    },
    {
      id: "service",
      iconName: "users",
      title: "Customer Service",
      description:
        "Trained, community-oriented teams committed to warm, helpful service at every interaction.",
    },
    {
      id: "sustainability",
      iconName: "sprout",
      title: "Sustainable Agriculture",
      description:
        "Agricultural operations built on responsible land stewardship, reducing waste and supporting local ecosystems.",
    },
    {
      id: "quality",
      iconName: "star",
      title: "Trusted Quality",
      description:
        "Rigorous sourcing and quality standards across every product category, from fresh produce to consumer brands.",
    },
    {
      id: "international",
      iconName: "globe",
      title: "International Operations",
      description:
        "Active expansion into Romania and the Netherlands, bringing the King model of excellence to new European markets.",
    },
  ],
};

const getValuesData = () => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(content);
    }
  } catch (err) {
    console.error("[ValuesModel] Error reading data file:", err);
  }
  return DEFAULT_VALUES_DATA;
};

const saveValuesData = (data) => {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  return data;
};

module.exports = {
  getValuesData,
  saveValuesData,
  DEFAULT_VALUES_DATA,
};
