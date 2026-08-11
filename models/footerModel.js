const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "data", "footer.json");

const DEFAULT_FOOTER_DATA = {
  logoUrl: "/assets/logo.png",
  brandName: "KING INTERNATIONALS",
  brandTagline:
    "A diversified European business group rooted in Portugal, committed to community, quality, and sustainable growth.",
  socialLinks: [
    { platform: "LinkedIn", url: "https://linkedin.com" },
    { platform: "Facebook", url: "https://facebook.com" },
    { platform: "Instagram", url: "https://instagram.com" },
  ],
  columns: [
    {
      title: "COMPANY",
      links: [
        { label: "About Us", url: "/#about" },
        { label: "Founders", url: "/#founders" },
        { label: "Impact & Stats", url: "/#stats" },
        { label: "Core Values", url: "/#values" },
        { label: "Sustainability", url: "/#values" },
      ],
    },
    {
      title: "BUSINESSES",
      links: [
        { label: "Supermarkets", url: "/businesses/supermarkets" },
        { label: "Cash & Carry", url: "/businesses/cash-carry" },
        { label: "MARL Wholesale", url: "/businesses/wholesale" },
        { label: "Agriculture", url: "/businesses/agriculture" },
        { label: "All Businesses", url: "/#businesses" },
      ],
    },
    {
      title: "BRANDS",
      links: [
        { label: "Casal do Conde", url: "/#brands" },
        { label: "Água São Silvestre", url: "/#brands" },
        { label: "Consumer Brands", url: "/#brands" },
        { label: "Our Portfolio", url: "/#brands" },
        { label: "Testimonials", url: "/#testimonials" },
      ],
    },
    {
      title: "CONTACT",
      links: [
        { label: "Get in Touch", url: "/#contact" },
        { label: "Locations", url: "/#stats" },
        { label: "Wholesale Enquiries", url: "/#contact" },
        { label: "Media Enquiries", url: "/#contact" },
      ],
    },
  ],
  copyrightText:
    "© 2026 King Internationals. All rights reserved. Headquartered in Portugal.",
  bottomLinks: [
    { label: "Home", url: "/#hero" },
    { label: "Businesses", url: "/#businesses" },
    { label: "Contact Us", url: "/#contact" },
  ],
};

const getFooterData = () => {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(content);
    }
  } catch (err) {
    console.error("[FooterModel] Error reading data file:", err);
  }
  return DEFAULT_FOOTER_DATA;
};

const saveFooterData = (data) => {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  return data;
};

module.exports = {
  getFooterData,
  saveFooterData,
  DEFAULT_FOOTER_DATA,
};
