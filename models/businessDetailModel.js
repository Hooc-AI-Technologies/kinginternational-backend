const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "data", "businessDetails");

const ensureDir = () => {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
};

const getBusinessDetailBySlug = (slug) => {
  ensureDir();
  const filePath = path.join(DATA_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const rawData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(rawData);
};

const saveBusinessDetailBySlug = (slug, data) => {
  ensureDir();
  const filePath = path.join(DATA_DIR, `${slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  return data;
};

module.exports = {
  getBusinessDetailBySlug,
  saveBusinessDetailBySlug,
};
