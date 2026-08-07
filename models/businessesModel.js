const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "data", "businesses.json");

const DEFAULT_BUSINESSES_DATA = {
  titleLine1: "Four Businesses.",
  titleHighlight: "One Vision.",
  viewAllLabel: "View All",
  viewAllLink: "/businesses",
  cards: [
    {
      id: "supermarkets",
      title: "Supermarkets",
      description:
        "Full-service neighbourhood supermarkets bringing fresh food and everyday essentials to local communities.",
      ctaLabel: "EXPLORE",
      ctaLink: "/businesses/supermarkets",
      imageUrl: "/assets/supermarket.png",
    },
    {
      id: "cash-carry",
      title: "Cash & Carry",
      description:
        "Wholesale cash and carry operations serving restaurants, caterers, and independent retailers across Portugal.",
      ctaLabel: "EXPLORE",
      ctaLink: "/businesses/cash-carry",
      imageUrl: "/assets/cash-n-carry.png",
    },
    {
      id: "marl-wholesale",
      title: "MARL Wholesale",
      description:
        "Strategic wholesale presence at MARL, Lisbon's primary agri-food distribution market, ensuring farm-to-shelf freshness.",
      ctaLabel: "EXPLORE",
      ctaLink: "/businesses/wholesale",
      imageUrl: "/assets/warehouse.png",
    },
    {
      id: "agriculture",
      title: "Agriculture",
      description:
        "Integrated agricultural operations cultivating premium produce with sustainable farming practices and direct supply chains.",
      ctaLabel: "EXPLORE",
      ctaLink: "/businesses/agriculture",
      imageUrl: "/assets/agriculture.png",
    },
  ],
  valuesTitleLine1: "The Values Behind",
  valuesTitleHighlight: "Everything",
  valuesTitleLine2: "We Do",
  valueCards: [
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

const getBusinessesData = () => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(content);
    }
  } catch (err) {
    console.error("[BusinessesModel] Error reading data file:", err);
  }
  return DEFAULT_BUSINESSES_DATA;
};

const saveBusinessesData = (data) => {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  return data;
};

module.exports = {
  getBusinessesData,
  saveBusinessesData,
  DEFAULT_BUSINESSES_DATA,
};
