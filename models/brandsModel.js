const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "data", "brands.json");

const DEFAULT_BRANDS_DATA = {
  titleLine1: "Crafted with Purpose,",
  titleHighlight: "Loved by Many",
  cards: [
    {
      id: "casal-do-conde",
      tag: "BRAND · WINE · DOC DO TEJO",
      title: "Casal do Conde",
      description:
        "Award-winning Portuguese wines from the Tejo region, crafted with tradition and recognised internationally for exceptional quality.",
      ctaLabel: "Discover the Brand",
      ctaLink: "/brands/casal-do-conde",
      imageUrl: "/assets/wine-bottle.png",
      spanClass: "col-span-1 lg:col-span-2 row-span-1 lg:row-span-2 min-h-[460px] lg:min-h-[560px]",
    },
    {
      id: "agua-sao-silvestre",
      tag: "BRAND · WATER",
      title: "Água São Silvestre",
      description: "",
      ctaLabel: "Learn More",
      ctaLink: "/brands/sao-silvestre",
      imageUrl: "/assets/brand-water.png",
      spanClass: "col-span-1 min-h-[260px]",
    },
    {
      id: "rooh-afza",
      tag: "BRAND · BEVERAGES",
      title: "Rooh Afza",
      description: "The beloved rose-flavoured syrup enjoyed by millions across generations.",
      ctaLabel: "Learn More",
      ctaLink: "/brands/rooh-afza",
      imageUrl: "/assets/beverages.png",
      spanClass: "col-span-1 min-h-[260px]",
    },
    {
      id: "zaika",
      tag: "BRAND · FOOD & SPICES",
      title: "Zaika",
      description:
        "Authentic flavours and premium spice blends that bring the richness of culinary tradition to every table.",
      ctaLabel: "Discover the Brand",
      ctaLink: "/brands/zaika",
      imageUrl: "/assets/zaika.png",
      spanClass: "col-span-1 lg:col-span-2 min-h-[280px]",
    },
    {
      id: "desi-chai",
      tag: "BRAND · TEA",
      title: "Desi Chai",
      description:
        "Rich, aromatic masala tea crafted from hand-picked leaves and traditional spice blends.",
      ctaLabel: "Learn More",
      ctaLink: "/brands/desi-chai",
      imageUrl: "/assets/tea.png",
      spanClass: "col-span-1 min-h-[280px]",
    },
  ],
};

const getBrandsData = () => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(content);
    }
  } catch (err) {
    console.error("[BrandsModel] Error reading data file:", err);
  }
  return DEFAULT_BRANDS_DATA;
};

const saveBrandsData = (data) => {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  return data;
};

module.exports = {
  getBrandsData,
  saveBrandsData,
  DEFAULT_BRANDS_DATA,
};
