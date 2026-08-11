const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "data", "business-details");

const DEFAULT_BUSINESS_DETAILS = {
  supermarkets: {
    slug: "supermarkets",
    name: "King Supermarkets",
    badge: "PORTUGAL · RETAIL EXCELLENCE",
    hero: {
      titleLine1: "Fresh Everyday.",
      titleHighlight: "Community Focused.",
      titleLine2: "Quality Always.",
      subtitle: "Bringing high quality groceries, fresh produce, and everyday household essentials directly to Portuguese families across 9 strategic supermarket locations.",
      primaryCtaLabel: "Find a Store",
      primaryCtaLink: "/#contact",
      secondaryCtaLabel: "Our Product Range",
      secondaryCtaLink: "#products",
      bgImageUrl: "/assets/supermarket.png"
    },
    about: {
      tag: "OUR RETAIL VISION",
      titleLine1: "Serving Local Neighbourhoods With",
      titleHighlight: "Freshness & Care",
      paragraph1: "King Supermarkets is the flagship retail arm of King Internationals, built on a foundation of quality, affordability, and community engagement. Our stores offer a warm, welcoming environment with an extensive selection of fresh fruits, vegetables, meats, bakery goods, and everyday household items.",
      paragraph2: "We source directly from local farmers and trusted suppliers, ensuring farm-to-shelf freshness while keeping prices competitive for local families.",
      bulletPoints: [
        "Fresh daily deliveries from local Portuguese farms",
        "Curated selection of national and international brands",
        "Modern, clean, and accessible store layouts",
        "Dedicated customer care team committed to excellence"
      ],
      imageUrl: "/assets/supermarket.png"
    },
    productRange: {
      tag: "OUR OFFERINGS",
      titleLine1: "Comprehensive Product Selection For",
      titleHighlight: "Every Household",
      items: [
        {
          id: "fresh-produce",
          number: "01",
          title: "Fresh Produce & Organic Goods",
          description: "Daily harvested vegetables, seasonal fruits, and certified organic produce sourced directly from Portuguese growers.",
          iconName: "shopping-bag"
        },
        {
          id: "meat-bakery",
          number: "02",
          title: "Butchery & Fresh Bakery",
          description: "Premium cuts of fresh meat, artisan bread baked in-store daily, and handcrafted traditional pastry selections.",
          iconName: "store"
        },
        {
          id: "pantry-essentials",
          number: "03",
          title: "Pantry & Groceries",
          description: "Extensive selection of staples, oils, spices, beverages, and packaged goods from top European brands.",
          iconName: "package"
        },
        {
          id: "household-care",
          number: "04",
          title: "Household & Personal Care",
          description: "Complete range of hygiene products, cleaning supplies, and home care essentials at value pricing.",
          iconName: "home"
        }
      ]
    },
    whyChoose: {
      tag: "THE KING DIFFERENCE",
      titleLine1: "Why Communities Choose",
      titleHighlight: "King Supermarkets",
      theme: "light",
      items: [
        {
          id: "quality-guarantee",
          title: "Quality Guarantee",
          description: "Strict quality checks on all incoming goods to guarantee maximum freshness and safety."
        },
        {
          id: "competitive-pricing",
          title: "Competitive Pricing",
          description: "Fair everyday pricing paired with frequent promotional offers and savings packages."
        },
        {
          id: "convenient-locations",
          title: "Convenient Locations",
          description: "Strategically located stores with convenient parking and accessibility for local residents."
        }
      ]
    },
    gallery: {
      tag: "STORE HIGHLIGHTS",
      titleLine1: "Inside Our Supermarkets",
      titleHighlight: "Across Portugal",
      images: [
        "/assets/supermarket.png",
        "/assets/cash-n-carry.png",
        "/assets/warehouse.png"
      ]
    },
    faq: {
      tag: "QUESTIONS & ANSWERS",
      titleLine1: "Frequently Asked",
      titleHighlight: "Questions",
      items: [
        {
          id: "faq-1",
          question: "What are the standard supermarket operating hours?",
          answer: "Most of our King Supermarket locations are open 7 days a week from 8:00 AM to 9:00 PM."
        },
        {
          id: "faq-2",
          question: "Do you offer home delivery service?",
          answer: "Yes, home delivery is available in select cities. Please contact your nearest store for details."
        }
      ]
    },
    ctaBanner: {
      titleLine1: "Visit Your Nearest",
      titleHighlight: "King Supermarket Today",
      subtitle: "Experience fresh produce, great savings, and friendly community service.",
      ctaLabel: "Find Store Location",
      ctaLink: "/#contact",
      bgImageUrl: "/assets/supermarket.png"
    }
  },
  "cash-carry": {
    slug: "cash-carry",
    name: "King Cash & Carry",
    badge: "PORTUGAL · WHOLESALE RETAIL",
    hero: {
      titleLine1: "Bulk Wholesale.",
      titleHighlight: "Unbeatable Prices.",
      titleLine2: "For Businesses.",
      subtitle: "Empowering HoReCa clients, independent retailers, and bulk buyers with high-volume food and non-food wholesale inventory across Portugal.",
      primaryCtaLabel: "Partner With Us",
      primaryCtaLink: "/#contact",
      secondaryCtaLabel: "Explore Wholesale Range",
      secondaryCtaLink: "#products",
      bgImageUrl: "/assets/cash-n-carry.png"
    },
    about: {
      tag: "WHOLESALE SOLUTIONS",
      titleLine1: "Your Trusted Supply Partner For",
      titleHighlight: "Commercial Growth",
      paragraph1: "King Cash & Carry is designed specifically for business buyers, caterers, hotels, restaurants, and convenience store operators who demand bulk inventory at volume pricing.",
      paragraph2: "We maintain expansive warehouse spaces stocked with thousands of items, flexible procurement options, and dedicated account support for trade customers.",
      bulletPoints: [
        "Bulk inventory pricing tailored for trade customers",
        "Streamlined checkout and bulk pickup facilities",
        "Wide variety of food service and commercial products",
        "Dedicated account managers for trade contracts"
      ],
      imageUrl: "/assets/cash-n-carry.png"
    },
    productRange: {
      tag: "WHOLESALE CATEGORIES",
      titleLine1: "Everything Your Business Needs",
      titleHighlight: "Under One Roof",
      items: [
        {
          id: "commercial-food",
          number: "01",
          title: "Bulk Food & Catering Ingredients",
          description: "Large format oils, flour, rice, canned goods, and dairy products ideal for commercial kitchens.",
          iconName: "package"
        },
        {
          id: "beverages-spirits",
          number: "02",
          title: "Beverages & Wines",
          description: "Comprehensive beverage portfolio including mineral waters, juices, soft drinks, wines, and spirits.",
          iconName: "glass-water"
        },
        {
          id: "frozen-refrigerated",
          number: "03",
          title: "Frozen & Chilled Foods",
          description: "Meats, seafood, prepared items, and frozen desserts stored under strict cold-chain compliance.",
          iconName: "snowflake"
        },
        {
          id: "commercial-supplies",
          number: "04",
          title: "Packaging & Sanitation Supplies",
          description: "Takeaway packaging, industrial cleaning supplies, and kitchen sanitation disposables.",
          iconName: "shield"
        }
      ]
    },
    whyChoose: {
      tag: "ADVANTAGES",
      titleLine1: "Why Businesses Choose",
      titleHighlight: "King Cash & Carry",
      theme: "light",
      items: [
        {
          id: "volume-discounts",
          title: "Volume Discounts",
          description: "Tiered pricing structures that reward higher volume purchases."
        },
        {
          id: "reliable-supply",
          title: "Reliable Stock Availability",
          description: "High stock turnover ensuring fast fulfillment for urgent business orders."
        },
        {
          id: "flexible-payment",
          title: "Commercial Credit Terms",
          description: "Tailored commercial payment terms for verified trade partners."
        }
      ]
    },
    gallery: {
      tag: "WAREHOUSE LOCATIONS",
      titleLine1: "State of the Art Wholesale Facilities",
      titleHighlight: "In Portugal",
      images: [
        "/assets/cash-n-carry.png",
        "/assets/warehouse.png",
        "/assets/supermarket.png"
      ]
    },
    faq: {
      tag: "TRADE FAQ",
      titleLine1: "Business Customer",
      titleHighlight: "Inquiries",
      items: [
        {
          id: "faq-cc-1",
          question: "How do I register for a business trade account?",
          answer: "You can register online or at any Cash & Carry customer service desk with a valid tax ID and business license."
        },
        {
          id: "faq-cc-2",
          question: "What are the minimum purchase thresholds?",
          answer: "We offer both cash purchases with no minimums and bulk trade accounts with tiered discount brackets."
        }
      ]
    },
    ctaBanner: {
      titleLine1: "Open a Business Account",
      titleHighlight: "With King Cash & Carry",
      subtitle: "Optimize your commercial supply chain today.",
      ctaLabel: "Register Trade Account",
      ctaLink: "/#contact",
      bgImageUrl: "/assets/cash-n-carry.png"
    }
  },
  wholesale: {
    slug: "wholesale",
    name: "MARL Wholesale Operations",
    badge: "LISBON · AGRI-FOOD DISTRIBUTION",
    hero: {
      titleLine1: "Strategic Agri-Food.",
      titleHighlight: "Market Leadership.",
      titleLine2: "Direct Distribution.",
      subtitle: "Operating at MARL (Mercado de Abastecimento da Região de Lisboa), Lisbon's central agri-food hub, connecting agricultural producers directly to national and international markets.",
      primaryCtaLabel: "Become a Partner",
      primaryCtaLink: "/#contact",
      secondaryCtaLabel: "Distribution Network",
      secondaryCtaLink: "#about",
      bgImageUrl: "/assets/warehouse.png"
    },
    about: {
      tag: "HUB AT MARL",
      titleLine1: "Lisbon's Premier Food Distribution",
      titleHighlight: "Infrastructure",
      paragraph1: "MARL Wholesale is King Internationals' core logistical hub for agri-food products in Greater Lisbon. Operating within the region's largest food market, we manage large-scale wholesale supply of fresh produce, imports, and exports.",
      paragraph2: "With dedicated temperature-controlled storage and efficient logistics, MARL Wholesale provides reliable supply chain continuity for supermarkets, distributors, and exporters across Southern Europe.",
      bulletPoints: [
        "Prime location inside Lisbon's premier wholesale food market (MARL)",
        "Direct link between agricultural growers and commercial buyers",
        "Advanced cold-chain storage and logistics infrastructure",
        "Export capabilities across Europe and international destinations"
      ],
      imageUrl: "/assets/warehouse.png"
    },
    productRange: {
      tag: "CORE CATEGORIES",
      titleLine1: "Fresh Produce & Bulk Distribution",
      titleHighlight: "Services",
      items: [
        {
          id: "fresh-fruits-veg",
          number: "01",
          title: "Fresh Fruits & Vegetables",
          description: "Citrus, apples, berries, root vegetables, and leafy greens supplied fresh daily.",
          iconName: "sprout"
        },
        {
          id: "imported-exotics",
          number: "02",
          title: "Imported Produce & Exotics",
          description: "Global sourcing of tropical fruits, off-season produce, and specialty culinary items.",
          iconName: "globe"
        },
        {
          id: "logistics-storage",
          number: "03",
          title: "Cold-Chain Logistics",
          description: "Climate-controlled warehousing and cross-docking distribution services.",
          iconName: "truck"
        },
        {
          id: "export-services",
          number: "04",
          title: "European Trade & Export",
          description: "Facilitating Portuguese agricultural exports to EU markets.",
          iconName: "building-2"
        }
      ]
    },
    whyChoose: {
      tag: "MARKET STRENGTH",
      titleLine1: "Why Partners Trust",
      titleHighlight: "MARL Wholesale",
      theme: "light",
      items: [
        {
          id: "strategic-hub",
          title: "Strategic Location",
          description: "Located at Portugal's principal logistical distribution node."
        },
        {
          id: "direct-sourcing",
          title: "Direct Producer Ties",
          description: "Eliminating unnecessary intermediaries for maximum producer and buyer value."
        },
        {
          id: "cold-chain",
          title: "Certified Cold-Chain Integrity",
          description: "Unbroken temperature preservation from field arrival to dispatch."
        }
      ]
    },
    gallery: {
      tag: "MARL LOGISTICS",
      titleLine1: "Our Distribution Hub",
      titleHighlight: "In Action",
      images: [
        "/assets/warehouse.png",
        "/assets/agriculture.png",
        "/assets/cash-n-carry.png"
      ]
    },
    faq: {
      tag: "LOGISTICS FAQ",
      titleLine1: "MARL Wholesale Hub",
      titleHighlight: "Inquiries",
      items: [
        {
          id: "faq-marl-1",
          question: "Where is the MARL hub located?",
          answer: "Our operations are located inside MARL - Mercado de Abastecimento da Região de Lisboa, Pavilhão de Hortofrutícolas, Loures, Portugal."
        },
        {
          id: "faq-marl-2",
          question: "Do you offer export capabilities to other European countries?",
          answer: "Yes, we handle international shipping and export compliance for produce sent across the EU and Beyond."
        }
      ]
    },
    ctaBanner: {
      titleLine1: "Connect With Our MARL Hub",
      titleHighlight: "Distribution Team",
      subtitle: "Inquire about wholesale supply contracts or producer partnerships.",
      ctaLabel: "Contact MARL Hub",
      ctaLink: "/#contact",
      bgImageUrl: "/assets/warehouse.png"
    }
  },
  agriculture: {
    slug: "agriculture",
    name: "King Agriculture",
    badge: "PORTUGAL · SUSTAINABLE FARMING",
    hero: {
      titleLine1: "Sustainable Farming.",
      titleHighlight: "Premium Produce.",
      titleLine2: "From Field to Table.",
      subtitle: "Cultivating high-yield, eco-friendly agricultural operations in Portugal, focusing on premium produce, soil health, and sustainable supply chains.",
      primaryCtaLabel: "Learn About Farming",
      primaryCtaLink: "#about",
      secondaryCtaLabel: "Partner With Us",
      secondaryCtaLink: "/#contact",
      bgImageUrl: "/assets/agriculture.png"
    },
    about: {
      tag: "SUSTAINABLE CULTIVATION",
      titleLine1: "Responsible Agriculture Rooted In",
      titleHighlight: "Innovation & Soil Care",
      paragraph1: "King Agriculture represents our commitment to responsible land management and agricultural self-sufficiency. By employing modern farming technologies alongside eco-friendly practices, we produce top-tier fruits, vegetables, and crops.",
      paragraph2: "Our crops directly feed into King Supermarkets and King Cash & Carry networks, guaranteeing that our customers enjoy genuine farm-to-table freshness.",
      bulletPoints: [
        "Eco-friendly irrigation and water management techniques",
        "Zero-waste agricultural harvesting procedures",
        "Direct integration into King retail & wholesale channels",
        "Continuous soil testing and organic enrichment"
      ],
      imageUrl: "/assets/agriculture.png"
    },
    productRange: {
      tag: "FARM PRODUCE",
      titleLine1: "Cultivated With Excellence &",
      titleHighlight: "Environmental Care",
      items: [
        {
          id: "horticultural-crops",
          number: "01",
          title: "Horticultural Crops",
          description: "Fresh tomatoes, peppers, cucumbers, and brassicas grown in ideal Portuguese climate conditions.",
          iconName: "sprout"
        },
        {
          id: "orchard-fruits",
          number: "02",
          title: "Orchard Fruits & Citrus",
          description: "Sweet citrus, apples, pears, and stone fruits cultivated for optimal taste and nutrition.",
          iconName: "sun"
        },
        {
          id: "sustainable-grain",
          number: "03",
          title: "Arable Farming",
          description: "Sustainable grain and fodder production supporting regional agriculture and livestock.",
          iconName: "wheat"
        },
        {
          id: "greenhouse-produce",
          number: "04",
          title: "Controlled-Environment Produce",
          description: "High-efficiency greenhouse farming ensuring year-round supply of fresh greens.",
          iconName: "home"
        }
      ]
    },
    whyChoose: {
      tag: "SUSTAINABILITY",
      titleLine1: "Our Agricultural Guiding",
      titleHighlight: "Principles",
      theme: "light",
      items: [
        {
          id: "eco-stewardship",
          title: "Land Stewardship",
          description: "Preserving soil vitality and local biodiversity for future generations."
        },
        {
          id: "water-efficiency",
          title: "Precision Irrigation",
          description: "Drip irrigation and sensor-driven water conservation practices."
        },
        {
          id: "traceability",
          title: "Full Traceability",
          description: "100% transparent supply chain tracking from seed planted to retail shelf."
        }
      ]
    },
    gallery: {
      tag: "OUR FARMS",
      titleLine1: "Portuguese Countryside",
      titleHighlight: "Agriculture",
      images: [
        "/assets/agriculture.png",
        "/assets/warehouse.png",
        "/assets/supermarket.png"
      ]
    },
    faq: {
      tag: "AGRICULTURE FAQ",
      titleLine1: "Farming & Produce",
      titleHighlight: "Questions",
      items: [
        {
          id: "faq-ag-1",
          question: "Where are King Agriculture farms located?",
          answer: "Our agricultural estates are situated across key fertile agricultural regions in Portugal."
        },
        {
          id: "faq-ag-2",
          question: "Are King Agriculture products certified sustainable?",
          answer: "Yes, our farms comply with European agricultural safety standards and sustainable farming practices."
        }
      ]
    },
    ctaBanner: {
      titleLine1: "Partner With King Agriculture",
      titleHighlight: "Supply Chain",
      subtitle: "Discover how our farm produce can elevate your business.",
      ctaLabel: "Contact Agricultural Team",
      ctaLink: "/#contact",
      bgImageUrl: "/assets/agriculture.png"
    }
  }
};

const getBusinessDetailData = (slug) => {
  try {
    const file = path.join(DATA_DIR, `${slug}.json`);
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, "utf-8");
      return JSON.parse(content);
    }
  } catch (err) {
    console.error(`[BusinessDetailModel] Error reading ${slug}.json:`, err);
  }
  return DEFAULT_BUSINESS_DETAILS[slug] || null;
};

const saveBusinessDetailData = (slug, data) => {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  const file = path.join(DATA_DIR, `${slug}.json`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf-8");
  return data;
};

module.exports = {
  getBusinessDetailData,
  saveBusinessDetailData,
  DEFAULT_BUSINESS_DETAILS,
};
