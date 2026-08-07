const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "data", "testimonials.json");

const DEFAULT_TESTIMONIALS_DATA = {
  titleLine1: "Stories From the",
  titleHighlight: "Communities",
  titleLine2: "We Serve",
  items: [
    {
      id: "sofia-mendes",
      initials: "SM",
      avatarBg: "bg-amber-500",
      quote:
        "King Internationals is the supermarket my family trusts every week. The fresh produce is always exceptional and the team genuinely feels like part of our neighbourhood.",
      author: "Sofia Mendes",
      role: "Regular Customer, Lisbon",
    },
    {
      id: "antonio-ferreira",
      initials: "AF",
      avatarBg: "bg-amber-700",
      quote:
        "As a restaurant owner, their Cash & Carry operation is indispensable. Reliable stock, competitive pricing, and a team that genuinely understands what professional buyers need.",
      author: "António Ferreira",
      role: "Restaurant Owner, Porto",
    },
    {
      id: "andreea-ionescu",
      initials: "AI",
      avatarBg: "bg-blue-600",
      quote:
        "King Internationals placed me in a great role in Portugal within weeks. Their international recruitment team is professional, communicative, and genuinely invested in your success.",
      author: "Andreea Ionescu",
      role: "Placed Candidate, Romania",
    },
  ],
};

const getTestimonialsData = () => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(content);
    }
  } catch (err) {
    console.error("[TestimonialsModel] Error reading data file:", err);
  }
  return DEFAULT_TESTIMONIALS_DATA;
};

const saveTestimonialsData = (data) => {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  return data;
};

module.exports = {
  getTestimonialsData,
  saveTestimonialsData,
  DEFAULT_TESTIMONIALS_DATA,
};
